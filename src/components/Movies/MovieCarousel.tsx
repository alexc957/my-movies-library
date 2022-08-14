import { Button, Container } from "@chakra-ui/react";
import React, { forwardRef, LegacyRef, MutableRefObject, useImperativeHandle, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import { IMovieResult } from "../../interfaces/movies";

type CarosuselProps = {
  movies: IMovieResult[];
};

function MovieCarousel({ movies }: CarosuselProps, ref: any) {
  const carouselRef = useRef<any>(null);

  const getCarouselState = () => {
  
    if(carouselRef){

      alert(JSON.stringify(carouselRef.current.state))
    }
  }

   
  useImperativeHandle(ref, () => ({
    state: carouselRef.current?.state
  }))

  return (
    <Container width={"75%"} maxW="md">
      <Button onClick={getCarouselState}>get Carousel state</Button>
      <Carousel 
        ref={carouselRef}
        dynamicHeight={false} 
        showThumbs={false} 
        autoPlay 
        infiniteLoop>
        {movies.map((movie, index) => (
          <div key={index}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <p>{movie.overview}</p>
          </div>
        ))}
      </Carousel>
    </Container>
  );
}


export default  forwardRef(MovieCarousel)