import React from "react";
import { ThemeProvider as ChakraThemeProvider } from "@chakra-ui/core";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

import App from "./App";
import appTheme from "./styles/appTheme";
import GlobalStyles from "./styles/GlobalStyles";

const AppWrapper = () => (
  <ChakraThemeProvider>
    <EmotionThemeProvider theme={appTheme}>
      <GlobalStyles /> {/* Apply Emotion Global Styles */}
      <App />
    </EmotionThemeProvider>
  </ChakraThemeProvider>
);

export default AppWrapper;
