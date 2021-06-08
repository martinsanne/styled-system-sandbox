import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";

import theme from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyle";
import Greet from "./pages/Greet";

const Root = styled.div`
  line-height: 1.5;
  font-size: 2rem;
`;

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Root>
          <Greet />
          <GlobalStyle />
        </Root>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
