import React from "react";
import Section from "../UI/section";
import styled from "styled-components";

const EducationSectionStyles = styled.div`
  height: 100%;
  width: 100%;
  background: var(--purple);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export default function educationSection() {
  return (
    <Section height="100vh">
      <EducationSectionStyles id="education">Educations</EducationSectionStyles>
    </Section>
  );
}
