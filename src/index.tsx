import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./context/context";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./ui/global-styles";
import { DescriptionPage, MainInvitationPage } from "./components";
import { theme } from "./theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainInvitationPage />
        <DescriptionPage />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
