import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import First from "./components/First";
import Second from "./components/Second";
import { Button } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import theme from "./theme";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ChakraProvider>
  );
}
