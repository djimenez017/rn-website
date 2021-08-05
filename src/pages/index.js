import * as React from "react";
import { createGlobalStyle } from "styled-components";
import Container from "../components/container";
import Navigation from "../components/UI/Navigation";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  body {
    --white:#F9F9F9;
    --blue: #CDF0EA;
    --pink: #F7DBF0;
    --purple: #BEAEE2;
    --black: #000000;
    --font: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--white);
    color: var(--black);
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-family: var(--font);
    scroll-behavior: smooth;
    font-size: 18px;
  }
`;

const IndexPage = (props) => {
  return (
    <main>
      <GlobalStyle />
      <title>Home Page</title>
      <Navigation />
      <Container>{props.children}</Container>
    </main>
  );
};

export default IndexPage;
