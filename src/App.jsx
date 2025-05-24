import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Aquí añadiremos los estilos para animar el botón
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    const VOICEFLOW_SCRIPT_ID = "voiceflow-chat-widget-script";
    const PROACTIVE_ENGAGEMENT_DELAY = 5000; // 5 segundos (ajusta según necesites)

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
          // Revisa la documentación de Voiceflow por si puedes añadir aquí
          // configuraciones para autoOpen, proactiveMessage, launcher animations, etc.
        };

        window.voiceflow.chat.load(voiceflowConfig);

        // Intenta acciones proactivas después de un retraso.
        // Es ideal si Voiceflow tiene un evento 'ready' para esto.
        // Si no, usamos setTimeout como un intento.
        const attemptProactiveActions = () => {
          setTimeout(() => {
            if (window.voiceflow && window.voiceflow.chat) {
              // 1. "Expandir" / Llamar la atención abriendo el chat:
              if (typeof window.voiceflow.chat.open === "function") {
                console.log(
                  "Intentando abrir el chat de Voiceflow proactivamente..."
                );
                window.voiceflow.chat.open();
              }

              // 2. Mensaje "Hola, ¿en qué te puedo ayudar?":
              // ESTO DEBE SER EL PRIMER MENSAJE EN TU FLUJO DE VOICEFLOW.
              // Se mostrará cuando el chat se abra.

              // 3. Sonido (USAR CON EXTREMA PRECAUCIÓN Y SOLO SI ES NECESARIO):
              // playAttentionSound(); // Llama a la función de sonido definida abajo
            }
          }, PROACTIVE_ENGAGEMENT_DELAY);
        };

        if (typeof window.voiceflow.chat.on === "function") {
          window.voiceflow.chat.on("ready", () => {
            // 'ready' es un evento común, verifica el correcto en Voiceflow
            console.log("Voiceflow chat widget está listo (evento 'ready').");
            attemptProactiveActions();
          });
        } else {
          // Fallback si no hay evento 'ready'
          console.log(
            "No hay evento 'ready' de Voiceflow, se intentarán acciones proactivas tras un delay post-load."
          );
          attemptProactiveActions();
        }
      } else {
        console.error(
          "Función window.voiceflow.chat.load no disponible. El script de Voiceflow puede no haberse cargado correctamente."
        );
      }
    };

    // --- Función para reproducir sonido (opcional y con precaución) ---
    // const playAttentionSound = () => {
    //   try {
    //     // Reemplaza '/ruta/a/tu/sonido-notificacion.mp3' con la URL de un sonido CORTO y SUTIL.
    //     const customSound = new Audio('/ruta/a/tu/sonido-notificacion.mp3');
    //     customSound.play().catch(error => console.warn("Reproducción automática de sonido fallida:", error));
    //   } catch (error) {
    //     console.error("Error al intentar reproducir sonido:", error);
    //   }
    // };
    // --- Fin función de sonido ---

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
