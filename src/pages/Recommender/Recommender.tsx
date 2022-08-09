import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import useFetch from "../../hooks/useFetch";
import { IMovieResult } from "../../interfaces/movies";
import { Button, Center, Container, Image, Spinner } from "@chakra-ui/react";
import { IResult } from "../../interfaces/results";

const genRandomNum = (min: number, max: number): number => {
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
};

export default function Recommender() {
  const [movie, setMovie] = useState<IMovieResult | null>(null);
  //const [popularMovies, setPopularMovies] = useState<IMovieResult[]>([]);
  //const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const { data, loading } = useFetch<IResult>(
    `${process.env.BASE_URL}/movie/popular?api_key=${process.env.API_KEY}&page=${page}`
  );

  const setRandomMovie = () => {
    if (data) {
      const movies = data.results || [];
      const randomMovie = movies[genRandomNum(0, movies.length - 1)];
      setMovie(randomMovie);
    }
  };

  useEffect(() => {
    setRandomMovie();
  }, [data]);

  if (loading && !movie) {
    return (
      <Layout searchBar>
        <Center>
          {" "}
          <Spinner role={"spinner"} />{" "}
        </Center>
      </Layout>
    );
  }
  const setRandomPage = () => {
    setPage(genRandomNum(1, 50));
  };
  return (
    <Layout searchBar>
      <Button onClick={setRandomPage}>Generar</Button>
      <Container>
        <h3>{movie?.title}</h3>
        <Image
          src={`${process.env.BASE_POSTER_URL}${movie?.poster_path}`}
          alt="poster image"
        />
      </Container>
    </Layout>
  );
}
