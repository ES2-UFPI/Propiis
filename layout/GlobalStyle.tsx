import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100vh;
  }

  :root {
    --white: #FFFFFF;
    --background: #FFFFFF;
    --black-1000: #000000;
    --black-800: #363F4E;
    --black-500: #55637b;

    --gray-600: #6B7079;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
  }

  body, input, textarea, select, button, h1 {
    font: 400 1rem "Inter", sans-serif;
    color: var(--black-800);
  }
  
  p {
    color: var(--gray-600);
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
`;
