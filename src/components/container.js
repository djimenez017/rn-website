import React from "react";
import styled from "styled-components";
import Section from "./UI/section";
import About from "../components/Sections/aboutSection";
import Certifications from "../components/Sections/certificationSection";
import Education from "../components/Sections/educationSection";
import Peep from "../images/sarahi.png";

const ContainerStyles = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 90%;
  margin: 0 auto;

  h1 {
    font-size: 4rem;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 50px;
    margin: 0;
    padding: 0;
  }

  img {
    margin: 0 auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .image-container {
    width: 50%;
  }

  .main-text {
    width: 100%;
  }

  @media (max-width: 414px) {
    width: 100%;

    h1 {
      font-size: 2.4rem;
      text-align: center;
    }

    .image-container {
      width: 100%;
    }

    .main-text {
      width: 100%;
    }
  }
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media (max-width: 414px) {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }
`;

export default function container(props) {
  return (
    <ContainerStyles>
      <Section height={"100vh"} id="#">
        <Row>
          <div className="image-container">
            <img src={Peep} alt="Sarahi Santana RN, BSN" />
          </div>
          <div className="main-text">
            <h1>Sarahi Santana RN, BSN 🫀🩺 💉</h1>
          </div>
        </Row>
      </Section>
      <About />
      <Certifications />
      <Education />
    </ContainerStyles>
  );
}
