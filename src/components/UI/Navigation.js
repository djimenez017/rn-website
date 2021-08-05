import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const NavigationStyles = styled.nav`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 20px;
  position: fixed;
  top: 0;
  background-color: var(--white);
  width: 100%;
  box-shadow: 1px -6px 55px -28px rgba(0, 0, 0, 0.95);
  -webkit-box-shadow: 1px -6px 55px -28px rgba(0, 0, 0, 0.95);
  -moz-box-shadow: 1px -6px 55px -28px rgba(0, 0, 0, 0.95);

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }

  li {
    text-decoration: none;
    color: var(--purple);
    padding: 0 15px;
  }

  a {
    color: var(--purple);
    text-decoration: none;
  }

  a:hover {
    border-bottom: solid 4px var(--pink);
  }

  h1:hover {
    color: var(--purple);
  }
`;

const Title = styled.h1``;

export default function navigation() {
  return (
    <NavigationStyles>
      <h1>Sarahi Santana</h1>

      <ul>
        <li>
          <Link to={"/#"}>Home</Link>
        </li>
        <li>
          <Link to={"/#about"}>About</Link>
        </li>
        <li>
          <Link to={"/#certification"}>Certifications</Link>
        </li>
        <li>
          <Link to={"/#education"}>Education</Link>
        </li>
        <li>
          <Link>Other</Link>
        </li>
      </ul>
    </NavigationStyles>
  );
}
