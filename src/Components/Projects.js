import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.jpeg";
import projImg4 from "../assets/img/project-img4.jpeg";
import projImg5 from "../assets/img/project-img5.jpeg";
import projImg6 from "../assets/img/project-img6.jpeg";
import projImg7 from "../assets/img/project-img7.jpeg";
import projImg8 from "../assets/img/project-img8.jpeg";
import projImg9 from "../assets/img/project-img9.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Humming Bird",
      description: "Real-time sign language converter mobile app",
      imgUrl: projImg1,
    },
    {
      title: "Sliding Puzzle Game Solver",
      description: "Path finding Algorithm Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Online Shopping Management System",
      description: "System to manage store with a GUI for customer use",
      imgUrl: projImg3,
    },
    {
      title: "Health System API",
      description: "API Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Chat App",
      description: "Real-time chat app with chatrooms",
      imgUrl: projImg5,
    },
    {
      title: "Queue Management System",
      description: "System to manage a restaurant with many cashiers.",
      imgUrl: projImg6,
    },
    {
        title: "STACCATOR",
        description: "A website on music instruments with an online shop to buy them.",
        imgUrl: projImg7,
      },
    {
        title: "Shopping Robot",
        description: "Modeling and Conrolling a mobile robot doing shopping for its human owner.",
        imgUrl: projImg8,
    },
    {
        title: "Student Progression System",
        description: "A university grading system to track students' progress.",
        imgUrl: projImg9,
      },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These projects represent a tangible showcase of how I've applied my skills to real-world challenges. They highlight my ability to collaborate, problem-solve, and deliver results. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}