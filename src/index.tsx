import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./context/context";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./ui/global-styles";
import { DescriptionPage, Loader, MainInvitationPage } from "./components";
import { theme } from "./theme/theme";
import mainBackground from "./assets/images/mainBackground.png";
import textSeparator from "./assets/images/textSeparator.png";

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const preloadImage = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = reject;
      });
    };

    Promise.all([
      document.fonts.ready,
      preloadImage(mainBackground),
      preloadImage(textSeparator),
    ])
      .then(() => {
        setTimeout(() => setIsReady(true), 1000);
      })
      .catch((err) => {
        console.error("Error loading resources", err);
        setIsReady(true);
      });
  }, []);

  return isReady ? (
    <>
      <MainInvitationPage />
      <DescriptionPage />
    </>
  ) : (
    <Loader />
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
