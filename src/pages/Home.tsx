import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import First from "../components/First";
import Second from "../components/Second";
import { IMovieResult } from "../interfaces/movies";
import { IResult } from "../interfaces/results";

export default function Home() {
  const [topMoviesResults, setTopMoviesResults] = useState<IResult | null>(
    null
  );
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=ed44417f2a0f7f2b9707ead57533289c"
        );
        const parsedResponse = await response.json();
        setTopMoviesResults(parsedResponse);
      } catch (e) {}
    };
    getData();
  }, []);
  return (
    <div>
      {" "}
      <div>
        <Button colorScheme="blue">
          <Link to={"/about"}>About</Link>
        </Button>
        <p>hello world from home</p>
        <p>page: {topMoviesResults?.page}</p>
        {topMoviesResults &&
          topMoviesResults.results.map((movie, index) => (
            <p key={index}>{movie.title}</p>
          ))}
        <First />
        <Second />
      </div>
    </div>
  );
}
