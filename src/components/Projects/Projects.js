import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/logo.jpg";
import chatify from "../../Assets/Projects/Paraiso.png";
import bitsOfCode from "../../Assets/Projects/pf2.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Paraiso */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Paraiso"
              description="A multi-role food services platform with Customer, Restaurant, and Admin apps. Features include reservations, pickup orders, reward system, and reward sharing. Built with Flutter, Firebase, and React."
              ghLink="https://github.com/Temoor-49/Paraiso-Project"
              demoLink="#" // Add demo link if available
            />
          </Col>

          {/* Little Lemon */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Little Lemon"
              description="A mobile restaurant app built with React Native and SQLite. Features include displaying menus, filtering, searching, and handling reservations. Created as part of the Meta Front-End Developer certification."
              ghLink="https://github.com/Temoor-49/little-lemon-capstone"
              demoLink="#" // Add demo link if available
            />
          </Col>

          {/* Portfolio */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio Website"
              description="A personal portfolio showcasing my projects, skills, certifications, and experiences. Built with React, Bootstrap, and custom animations. Includes GitHub, resume, and blog integration."
              ghLink="https://github.com/Temoor-49/Temor-Portfolio"
              demoLink="https://temor-portfolio.vercel.app/"
            />
          </Col>

          {/* Keep a couple of filler/demo projects using existing assets */}
          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Demo Project 1"
              description="Sample placeholder project using existing assets. You can replace this later with another real project."
              ghLink="https://github.com/Temoor-49"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Demo Project 2"
              description="Another placeholder project kept from assets. Useful for testing layout until you replace it with real work."
              ghLink="https://github.com/Temoor-49"
              demoLink="#"
            />
          </Col>*/}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
