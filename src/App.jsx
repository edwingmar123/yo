import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    const VOICEFLOW_SCRIPT_ID = "voiceflow-chat-widget-script";
    const PROACTIVE_ENGAGEMENT_DELAY = 5000;

    const playAttentionSound = () => {
      try {
        const customSound = new Audio("/sounds/notification.mp3");
        customSound
          .play()
          .catch((error) =>
            console.warn("Reproducción automática de sonido fallida:", error)
          );
      } catch (error) {
        console.error("Error al intentar reproducir sonido:", error);
      }
    };

    const startFloatingMessageLoop = () => {
      let tooltip = null;

      const showMessage = () => {
        if (tooltip) return;

        tooltip = document.createElement("div");
        tooltip.className = "chat-float-message";
        tooltip.innerText = "¡Acá estoy, úsame!";

        tooltip.addEventListener("click", () => {
          tooltip.remove();
          tooltip = null;
        });

        document.body.appendChild(tooltip);

        setTimeout(() => {
          if (tooltip) {
            tooltip.remove();
            tooltip = null;
          }
        }, 10000);
      };

      showMessage();

      const intervalId = setInterval(() => {
        showMessage();
      }, 10000);

      return () => clearInterval(intervalId);
    };

    const initializeAndEngageVoiceflow = () => {
      if (
        window.voiceflow &&
        window.voiceflow.chat &&
        typeof window.voiceflow.chat.load === "function"
      ) {
        const voiceflowConfig = {
          verify: { projectID: "6830825fe3e4ba215ad09193" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
        };

        window.voiceflow.chat.load(voiceflowConfig);

        const attemptProactiveActions = () => {
          setTimeout(() => {
            if (window.voiceflow && window.voiceflow.chat) {
              if (typeof window.voiceflow.chat.open === "function") {
                console.log("Abriendo el chat proactivamente...");
                window.voiceflow.chat.open();
              }
              playAttentionSound();
              startFloatingMessageLoop();
            }
          }, PROACTIVE_ENGAGEMENT_DELAY);
        };

        if (typeof window.voiceflow.chat.on === "function") {
          window.voiceflow.chat.on("ready", () => {
            console.log("Voiceflow chat listo.");
            attemptProactiveActions();
          });
        } else {
          attemptProactiveActions();
        }
      }
    };

    if (!document.getElementById(VOICEFLOW_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = VOICEFLOW_SCRIPT_ID;
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      script.type = "text/javascript";
      script.async = true;
      script.onload = initializeAndEngageVoiceflow;
      document.body.appendChild(script);
    } else {
      initializeAndEngageVoiceflow();
    }

    return () => {
      const tooltip = document.querySelector(".chat-float-message");
      if (tooltip) tooltip.remove();
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
