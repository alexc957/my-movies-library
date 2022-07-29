import { Center, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import withLogger from "../../components/HOC/withLogger";

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

type pagType = {
  current: number;
  total: number;
  setPage: (by: number) => void;
};
export default function MovieLIstPage({
  movieParam,
  isSearchResult,
}: MovieListPageProps) {
  const [page, setPage] = useState<number>(1);

  const search = useSearchStore((state) => state.searchValue);

  const getUrl = () => {
    return !isSearchResult
      ? `${process.env.BASE_URL}/movie/${movieParam}?api_key=${process.env.API_KEY}&page=${page}`
      : `${process.env.BASE_URL}/search/movie?api_key=${process.env.API_KEY}&page=${page}&query=${search}`;
  };

  const url = getUrl();

  const { data, loading } = useFetch<IResult>(url);

  const PaginationLog = withLogger<pagType, any>(Pagination, () => {
    console.log("I am a custom logger lol");
  });
  return (
    <Layout searchBar>
      {data && (
        <VStack>
          <MovieList movies={data.results} label="movie-item" />
          <PaginationLog
            current={page}
            total={data.total_pages}
            setPage={setPage}
          />
        </VStack>
      )}
    </Layout>
  );
}
