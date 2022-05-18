import { ThemeProvider } from "styled-components";

import StyleReset from "./globalStyles/StyleReset";
import GlobalStyle from "./globalStyles/GlobalStyle";
import Theme from "./globalStyles/Theme";

import Intro from "./components/Intro";



function App() {
  return (
    <ThemeProvider theme={Theme}>
      <StyleReset />
      <GlobalStyle />
      <Intro />
    </ThemeProvider>
  );
}

export default App;
