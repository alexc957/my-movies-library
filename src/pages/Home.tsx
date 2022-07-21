import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import First from "../components/First";
import Layout from "../components/Layout/Layout";
import Second from "../components/Second";
import useFetch from "../hooks/useFetch";
import { IMovieResult } from "../interfaces/movies";
import { IResult } from "../interfaces/results";

export default function Home() {
  /*const [topMoviesResults, setTopMoviesResults] = useState<IResult | null>(
    null
  );*/
  const { data, loading } = useFetch<IResult>(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=ed44417f2a0f7f2b9707ead57533289c"
  );
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      {" "}
      <div>
        {data &&
          data.results.map((movie, index) => <p key={index}>{movie.title}</p>)}
      </div>
    </div>
  );
}
