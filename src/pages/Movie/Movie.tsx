import {
  Box,
  Container,
  HStack,
  Spinner,
  Image,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import useFetch from "../../hooks/useFetch";
import { IDetailMovie } from "../../interfaces/movies";
import MovieDetails from "./components/MovieDetails";

export default function Movie() {
  const { id } = useParams();
  // https://api.themoviedb.org/3/movie/756999?api_key=ed44417f2a0f7f2b9707ead57533289c
  const { data, loading } = useFetch<IDetailMovie>(
    `${process.env.BASE_URL}/movie/${id}?api_key=${process.env.API_KEY}`
  );

  return (
    <Layout searchBar>
      {loading ? (
        <Spinner />
      ) : (
        <Box>
          <h3>{data?.title}</h3>
          <HStack width={"100%"}>
            <Image
              width={"40%"}
              src={`${process.env.BASE_POSTER_URL}${data?.poster_path}`}
            />
            {data && <MovieDetails movie={data} />}
          </HStack>
        </Box>
      )}
    </Layout>
  );
}
