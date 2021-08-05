import React from "react";
import Section from "../UI/section";
import styled from "styled-components";

const AboutSectionStyles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export default function aboutSection() {
  return (
    <Section height="100vh">
      <AboutSectionStyles id="about">About</AboutSectionStyles>
    </Section>
  );
}
