import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;800&display=swap');

  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  :root {
    font-family: 'Montserrat', 'sans-serif';
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    background-color: #222;
  }

`

export default GlobalStyle