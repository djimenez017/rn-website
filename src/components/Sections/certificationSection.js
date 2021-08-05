import React from "react";
import Section from "../UI/section";
import styled from "styled-components";

const CertificationSectionStyles = styled.div`
  height: 100%;
  width: 100%;
  background: var(--blue);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export default function certificationSection() {
  return (
    <Section height="100vh">
      <CertificationSectionStyles id="certification">
        {" "}
        Certifications
      </CertificationSectionStyles>
    </Section>
  );
}
