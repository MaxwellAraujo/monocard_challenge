import React from "react";
import {
  ThemeProvider as ChakraThemeProvider,
  CSSReset,
} from "@chakra-ui/react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import theme from "../../styles/theme";

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <CSSReset />
        {children}
      </EmotionThemeProvider>
    </ChakraThemeProvider>
  );
};

export default ThemeContainer;
