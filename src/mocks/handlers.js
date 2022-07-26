import { rest } from "msw";
import { INDIVIDUAL_MOVIE, NOW_PLAYING_MOVIES, POPULAR_MOVIES, TOP_MOVIES_RESULT, UPCOMING_MOVIES } from "./movies";

export const handlers = [
  rest.get(
    "https://api.themoviedb.org/3/movie/top_rated",  //?api_key=ed44417f2a0f7f2b9707ead57533289c
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(TOP_MOVIES_RESULT));
    }
  ),

  rest.get("https://api.themoviedb.org/3/movie/upcoming",
  (req, res, ctx)=> {
    return res(ctx.status(200),ctx.json(UPCOMING_MOVIES))
  }),

  rest.get("https://api.themoviedb.org/3/movie/now_playing",
  (req, res,ctx)=>{
    return res(ctx.status(200),ctx.json(NOW_PLAYING_MOVIES))
  }),

  rest.get("https://api.themoviedb.org/3/movie/popular",(req,res,ctx)=>{
    return res(ctx.status(200),ctx.json(POPULAR_MOVIES))
  }),

  rest.get("https://api.themoviedb.org/3/movie/:id",(req, res,ctx)=>{
    return res(ctx.status(200),ctx.json(INDIVIDUAL_MOVIE))
  })

];
