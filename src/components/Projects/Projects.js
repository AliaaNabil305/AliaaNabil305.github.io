import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              /* imgPath={chatify} */
              isBlog={false}
              title="𝐌𝐢𝐜𝐫𝐨𝐰𝐚𝐯𝐞 𝐌𝐢𝐜𝐫𝐨𝐜𝐨𝐧𝐭𝐫𝐨𝐥𝐥𝐞𝐫"
              description="The Microwave Oven Controller project simulates a microwave's embedded controller. It utilizes an LCD, keypad, and external buttons for operation, allowing users to select cooking options, defrost based on weight, and set cooking times. The system also features start/stop/pause conditions and provides visual and audible indicators for cooking progress."
              ghLink="https://github.com/AliaaNabil305/MICROWAVE_PROJECT.git"
              demoLink="https://drive.google.com/drive/folders/1toHDEfFEWNH1tr5IkWPSUHmxSE1XN955?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="𝐋𝐨𝐧𝐠 𝐃𝐢𝐯𝐢𝐬𝐢𝐨𝐧 𝐂𝐚𝐥𝐜𝐮𝐥𝐚𝐭𝐨𝐫 "
              description="This C program implements a polynomial division and remainder calculator. It allows the user to input polynomials in the form of coefficients and degrees for both the numerator and denominator. The program then performs polynomial division, calculates the quotient, and provides the remainder."
              ghLink="https://github.com/AliaaNabil305/long-division-project.git"
              /* demoLink="https://blogs.soumya-jit.tech/" */
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              /* imgPath={editor}
              isBlog={false} */
              title="𝐕𝐞𝐫𝐢𝐥𝐨𝐠 𝐈𝐦𝐩𝐥𝐞𝐦𝐞𝐧𝐭𝐚𝐭𝐢𝐨𝐧 𝐨𝐟 𝐀𝐏𝐁-𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝 𝐆𝐏𝐈𝐎 𝐚𝐧𝐝 𝐔𝐀𝐑𝐓 𝐂𝐨𝐧𝐭𝐫𝐨𝐥𝐥𝐞𝐫𝐬"
              description="Designing and implementing a GPIO controller and a UART controller, both integrated with the APB (Advanced Peripheral Bus) in Verilog. The project emphasizes synthesizable code and thorough testing."
              ghLink="https://github.com/AliaaNabil305/Computer-Architecture-APB-UART-GPIO-Project.git"
              demoLink="https://drive.google.com/drive/folders/1VxjRDkEEuZM0XxtknGGTobEW4vYkJ4L2?usp=drive_link"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              /* imgPath={leaf}
              isBlog={false} */
              title="𝐃𝐢𝐠𝐢𝐭𝐚𝐥 𝐂𝐨𝐦𝐦𝐮𝐧𝐢𝐜𝐚𝐭𝐢𝐨𝐧"
              description="Implementing and analyzing different line coding techniques commonly used in digital communication. The selected techniques for comparison are AMI (Alternate Mark Inversion), CMI (Bipolar with Return to Zero), and Manchester encoding. Each of these will be evaluated in conjunction with either Unipolar Non-Return to Zero (NRZ) or Polar Non-Return to Zero (NRZ)."
              ghLink="https://github.com/AliaaNabil305/Matlab-Fundamental-of-Communication-Systems-project.git"
              demoLink="https://drive.google.com/drive/folders/1jyiVrJFba1olYuaLEqKheo-ws8qbtC7s?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="𝐀𝐫𝐢𝐭𝐡𝐦𝐞𝐭𝐢𝐜 𝐚𝐧𝐝 𝐋𝐨𝐠𝐢𝐜𝐚𝐥 𝐔𝐧𝐢𝐭 𝐃𝐞𝐬𝐢𝐠𝐧"
              description="It focuses on creating a versatile processing unit capable of performing both arithmetic and logical operations. The ALU is controlled by a selection line, with the type of operation determined by specific bits in the control signal."
              ghLink="https://github.com/AliaaNabil305/VHDL-code-project-for-ALU.git"
              demoLink="https://drive.google.com/drive/folders/17FN2Pb4ABAcOU4uf4fOC-3FT47_3AmNd?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="𝐂𝐏𝐔 𝐒𝐜𝐡𝐞𝐝𝐮𝐥𝐞𝐫"
              description="It's an application designed to efficiently manage processes using various scheduling algorithms. The user can choose from different scheduling policies like First-Come-First-Serve (FCFS), Shortest Job First (SJF), Priority (both Preemptive and Non-Preemptive), and Round Robin."
              ghLink="https://github.com/AliaaNabil305/OS-project-CPU-Schedular.git"
              demoLink="https://drive.google.com/drive/folders/1LHMsn7nmHZXtw81jfkLBMjqqMaeNpY25?usp=sharing"
            />
            
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="𝐆𝐨-𝐁𝐚𝐜𝐤-𝐍-𝐏𝐫𝐨𝐭𝐨𝐜𝐨𝐥"
              description="The Go-Back-N protocol is an automatic repeat request (ARQ) protocol for reliable data communication in networks . 
              This project involves the implementation and simulation of the Go-Back-N protocol to ensure reliable and error-free transmission of data."
              ghLink="https://github.com/AliaaNabil305/Computer-Networks-Go-back-N-protocol-.git"
              demoLink="https://drive.google.com/drive/folders/1rfEw3fNYNYENeTLQV_UtzOvnzM4QuArx?usp=sharing"
            />
            
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="𝐗𝐌𝐋 𝐄𝐝𝐢𝐭𝐨𝐫"
              description="The XML and JSON File Parser project is a comprehensive endeavor that encompasses understanding, parsing, and visualizing data from XML and JSON files. This project not only focuses on efficient data processing but also emphasizes the creation of an intuitive Graphical User Interface (GUI) for an enhanced user experience."
              ghLink="https://github.com/AliaaNabil305/Data-Structure-Project-XML-Editor-.git"
              demoLink="https://drive.google.com/drive/folders/1oajL8tcApV2hVsPwCbbEiQsMFgK5XEks?usp=sharing"
            />
            
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="𝐀𝐝𝐯𝐚𝐧𝐜𝐞𝐝 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 𝐩𝐫𝐨𝐣𝐞𝐜𝐭"
              description="The Excel to Web API Converter project is a Java-based application designed to assist software engineers, like Fathy, in streamlining the process of converting Excel-based API specifications into a machine-readable format. This application aims to save time and effort by automating the transformation process."
              ghLink="https://github.com/AliaaNabil305/Apache-api-gui-project.git"
              demoLink="https://drive.google.com/drive/folders/1fTp3f-Ae6KMLplL0xdbyUlwzjbGhbKE6?usp=sharing"
            />
            
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="𝐌𝐚𝐫𝐤𝐞𝐭 𝐩𝐥𝐚𝐜𝐞"
              description="Online marketplace that has been developed using 
              Django and Python for the backend, along with CSS and HTML for the frontend. This 
              marketplace offers a wide range of functionalities and capabilities, ensuring a 
              smooth and enjoyable online shopping experience"
              ghLink="https://github.com/AliaaNabil305/Marketplace.git"
              demoLink="https://drive.google.com/drive/folders/1bkYlLoj3by_Y5x8gEctHx-lwBPU4EKJr?usp=sharing"
            />
            
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="𝐒𝐮𝐩𝐞𝐫𝐦𝐚𝐫𝐤𝐞𝐭 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞"
              description="It is designed to provide an efficient system 
              for managing sales, other operations within a supermarket , make it easier 
              for owners to manage the employees’ data, record the items available and 
              their suppliers, also to manage the supermarket’s payments and invoices ."
              ghLink="https://github.com/AliaaNabil305/supermarket-database-project.git"
              demoLink="https://drive.google.com/drive/folders/17lOAP1s6qJNlFE4nBb-k5AofZFdNQa6D?usp=sharing"
            />
            
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="𝐒𝐭𝐮𝐝𝐞𝐧𝐭 𝐆𝐫𝐚𝐝𝐢𝐧𝐠 𝐓𝐞𝐬𝐭𝐢𝐧𝐠"
              description="The Student Grading Application is a Java-based tool designed to automate the process of grading students based on specified criteria. This application takes input data from a file, processes it according to defined rules, and produces GPA and Grade for each student in a subject and test all of it ."
              ghLink="https://github.com/AliaaNabil305/StudentGrading-Testing.git"
              demoLink="https://drive.google.com/drive/folders/1R_AC5je7BoQfzh7nA3W51qTlcLpaTwBm?usp=sharing"
            />
            
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="𝐃𝐞𝐬𝐢𝐠𝐧 𝐚𝐧𝐝 𝐀𝐧𝐚𝐥𝐲𝐬𝐢𝐬 𝐨𝐟 𝐀𝐥𝐠𝐨𝐫𝐢𝐭𝐡𝐦"
              description="This project aims to solve seven tasks with multiple algorithms ."
              ghLink="https://github.com/AliaaNabil305/Algorithm_project.git"
              demoLink="https://drive.google.com/drive/folders/1_UtIEiRC2DBOs1yU3z2Gkepy6_-Q4NUK?usp=sharing"
            />
            
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
           imgPath={emotion}
              isBlog={false}
              title="𝐅𝐚𝐬𝐭 𝐅𝐨𝐨𝐝 𝐃𝐞𝐥𝐢𝐯𝐞𝐫𝐲 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧"
              description="This project is to collect end users and communicate with the food providers as well suggest
              food for end users."
              /* ghLink="https://github.com/AliaaNabil305/Algorithm_project.git" */
              demoLink="https://drive.google.com/drive/folders/1Hed-AaEnyGfBbXUCJihCrsXr6DyZy8U4?usp=sharing"
            />
            
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
