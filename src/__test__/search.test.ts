import { searchByName } from "../helpers/functions";
import { IDetailMovie } from "../interfaces/movies";

describe(".search", () => {
  describe('when searching for a movie that includes the name "batman"', () => {
    it("must have  the keyword batman included in the returned array of movies", () => {
      const movies = searchByName<IDetailMovie>("batman");

      movies.forEach((movie) => {
        expect(movie.title).toMatch(/batman/i);
      });
    });
  });
});
