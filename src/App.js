import StyleReset from "./globalStyles/StyleReset";
import GlobalStyle from "./globalStyles/GlobalStyle";

import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <StyleReset />
      <GlobalStyle />
      <Intro />
      <About />
      <Skills/>
      <Work />
      <Contact />
    </>
  );
}

export default App;
