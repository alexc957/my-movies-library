import { Center, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import MovieList from "../../components/Movies/MovieList";
import useFetch from "../../hooks/useFetch";
import useSearchStore from "../../hooks/useSearchStore";
import { IResult } from "../../interfaces/results";
import Pagination from "./components/Pagination";
type MovieListPageProps = {
  movieParam: string;
  isSearchResult?: boolean;
};
export default function MovieLIstPage({
  movieParam,
  isSearchResult,
}: MovieListPageProps) {
  const [page, setPage] = useState<number>(1);

  const search = useSearchStore((state) => state.searchValue);

  const url = !isSearchResult
    ? `${process.env.BASE_URL}/movie/${movieParam}?api_key=${process.env.API_KEY}&page=${page}`
    : `${process.env.BASE_URL}/search/movie?api_key=${process.env.API_KEY}&page=${page}&query=${search}`;
  const { data, loading } = useFetch<IResult>(url);

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
