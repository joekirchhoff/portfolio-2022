import { ThemeProvider } from "styled-components";

import StyleReset from "./globalStyles/StyleReset";
import GlobalStyle from "./globalStyles/GlobalStyle";
import Theme from "./globalStyles/Theme";

import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <StyleReset />
      <GlobalStyle />
      <Intro />
      <About />
      <Skills/>
      <Work />
    </ThemeProvider>
  );
}

export default App;
