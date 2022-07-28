import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import theme from "./theme";
import MovieLIstRouter from "./pages/MovieListPage/MovieLIstRouter";
import MovieLIstPage from "./pages/MovieListPage/MovieLIstPage";
import ErrorBoundaryHandler from "./ErrorBoundaryHandler";
import Movie from "./pages/Movie/Movie";

const ListRoute = () => (
  <Route path="list" element={<MovieLIstRouter />}>
    <Route index element={<MovieLIstPage movieParam="now_playing" />} />
    <Route
      path="now_playing"
      element={<MovieLIstPage movieParam="now_playing" />}
    />
    <Route path="latest" element={<MovieLIstPage movieParam="latest" />} />
    <Route path="popular" element={<MovieLIstPage movieParam="popular" />} />
    <Route path="upcoming" element={<MovieLIstPage movieParam="upcoming" />} />
  </Route>
);

export default function App() {
  return (
    <ErrorBoundaryHandler>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {ListRoute()}
            <Route path="/movie/:id" element={<Movie />} />

            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </ErrorBoundaryHandler>
  );
}
