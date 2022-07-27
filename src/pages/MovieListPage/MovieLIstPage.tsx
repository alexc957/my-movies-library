import { Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import MovieList from "../../components/Movies/MovieList";
import useFetch from "../../hooks/useFetch";
import { IResult } from "../../interfaces/results";
type MovieListPageProps = {
  movieParam: string;
};
export default function MovieLIstPage({ movieParam }: MovieListPageProps) {
  const [page, setPage] = useState<number>(1);
  const { data, loading } = useFetch<IResult>(
    `${process.env.BASE_URL}/movie/${movieParam}?api_key=${process.env.API_KEY}&page=${page}`
  );

  return (
    <Layout searchBar>
      {data && <MovieList movies={data.results} label="movie-item" />}
    </Layout>
  );
}
