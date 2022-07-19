export interface Genre {
  id?: number;
  name?: string;
}

export interface ProductionCompany {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

export interface ProductionCuntry {
  iso_3166_1: string;
  name: string;
}

export interface Lang {
  iso_639_1: string;
  name: string;
}

export interface IDetailMovie {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection: unknown;
  budget?: number;
  genres?: Genre[];
  homepage?: string | null;
  id?: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview: string | null;
  popularity?: number;
  poster_path: string | null;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCuntry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages?: Lang[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieResult {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
