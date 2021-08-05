import React from "react";
import styled from "styled-components";

const SectionStyle = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export default function section(props) {
  return (
    <SectionStyle style={{ height: props.height }}>
      {props.children}
    </SectionStyle>
  );
}
