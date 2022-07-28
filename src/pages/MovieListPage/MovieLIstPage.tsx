import { Center, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import MovieList from "../../components/Movies/MovieList";
import useFetch from "../../hooks/useFetch";
import { IResult } from "../../interfaces/results";
import Pagination from "./components/Pagination";
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
      {data && (
        <VStack>
          <MovieList movies={data.results} label="movie-item" />
          <Pagination
            current={page}
            total={data.total_pages}
            setPage={setPage}
          />
        </VStack>
      )}
    </Layout>
  );
}
