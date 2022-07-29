import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import theme from "../theme";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ChakraProvider>
  );
}
