import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import skinB from "../../Assets/Projects/SkinBankManagement.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import HomePage from "../../Assets/Projects/HomePage.png";
import suicide from "../../Assets/Projects/suicide.png";
import TransportPort from "../../Assets/Projects/TransportPortal.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HomePage}
              isBlog={false}
              title="Online Gas Booking System"
              description="The Online Gas Booking System is a web-based application designed to streamline the process of booking gas cylinders for households and businesses. This system allows users to register, place orders, track delivery status, and manage their bookings efficiently. It also provides an admin panel for managing orders, tracking inventory, and ensuring seamless operations."
              ghLink="https://github.com/RamchandraGautam/OnlineGasBooking"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TransportPort}
              isBlog={false}
              title="Transport Management System"
              description="The Transport Management System is a web-based solution designed to optimize and streamline transport operations, including vehicle management, trip scheduling, and tracking. This system enables transport companies to efficiently manage their fleet, track shipments, and ensure timely deliveries while minimizing operational costs."
              ghLink="https://github.com/RamchandraGautam/CollageProject/blob/main/TransportManagement"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skinB}
              isBlog={false}
              title="Skin Bank Management System"
              description="The Skin Bank Management System is a web-based application designed to facilitate the collection, storage, and distribution of skin grafts for medical treatments. This system ensures efficient donor registration, inventory management, and tracking of skin grafts for hospitals and medical institutions."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
