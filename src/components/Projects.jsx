import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/3.png";
import projImg3 from "../assets/img/2.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";
import projImg7 from "../assets/img/7.png";
import projImg8 from "../assets/img/8.png";
import projImg9 from "../assets/img/9.png";
import projImg10 from "../assets/img/10.png";
import projImg11 from "../assets/img/11.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Funcionality",
      imgUrl: projImg1,
      url: "https://deft-bonbon-761e37.netlify.app",
    },
    {
      title: "Business Startup",
      description: "Design & Funcionality",
      imgUrl: projImg2,
      url: "https://endearing-tapioca-8ac7c7.netlify.app",
    },
    {
      title: "Business Startup",
      description: "Design & Funcionality",
      imgUrl: projImg3,
      url: "https://elaborate-bublanina-d1df2e.netlify.app",
    },
    {
      title: "Business Startup",
      description: "Design & Funcionality",
      imgUrl: projImg4,
      url: "https://friendly-douhua-e23437.netlify.app",
    },
    {
      title: "Business Startup",
      description: "Design & Funcionality",
      imgUrl: projImg5,
      url: "https://musical-kashata-20b47d.netlify.app",
    },
    {
      title: "Business Startup",
      description: "Design & Funcionality",
      imgUrl: projImg6,
      url: "https://silver-fudge-eaf3b6.netlify.app",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg7,
      url: "https://super-moxie-a71b6f.netlify.app",
    },
    {
      title: "Business Startup",
      description: "Design & Funcionality",
      imgUrl: projImg8,
      url: "https://super-moxie-a71b6f.netlify.app",
    },
    {
      title: "Business Startup",
      description: "Design & Funcionality",
      imgUrl: projImg9,
      url: "https://silver-fudge-eaf3b6.netlify.app",
    },
    {
      title: "Business Startup",
      description: "Design & Funcionality",
      imgUrl: projImg10,
      url: "https://musical-kashata-20b47d.netlify.app",
    },
    {
      title: "Business Startup",
      description: "Design & Funcionality",
      imgUrl: projImg11,
      url: "https://mellow-marigold-b9e22c.netlify.app",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here I present my projects which I carried out during my
                    frontend school stage with the Agile innova academy and they
                    helped me to assimilate and understand how beautiful and
                    interesting programming is, which gives you the opportunity
                    to create what you dream of, programming will have put in
                    place and shows you a better way to see the possibilities
                    that there are in the world and in working life..
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projet</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Contact me</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">How i am</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I am a trustworthy person, very committed and when I
                          promise something I always try to fulfill it,
                          commitments are extremely important, I love playing
                          sports and I am a soccer fan.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
