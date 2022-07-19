import { IMovieResult } from "./movies";

interface IUpcomingDates {
  maximum: string;
  minimum: string;
}

export interface IResult {
  page: number;
  results: IMovieResult[];
  total_results: number;
  total_pages: number;
  dates?: IUpcomingDates;
}
