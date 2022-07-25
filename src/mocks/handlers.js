import { rest } from "msw";
import { TOP_MOVIES_RESULT } from "./movies";

export const handlers = [
  rest.get(
    "https://api.themoviedb.org/3/movie/top_rated",  //?api_key=ed44417f2a0f7f2b9707ead57533289c
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(TOP_MOVIES_RESULT));
    }
  ),
];
