import { rest } from "msw";
import bulbasaur from "./data/bulbasaur.json";

export const handlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon/:name", (req, res, ctx) => {
    const { name } = req.params;

    if (name === "bulbasaur") {
      return res(ctx.status(200), ctx.json(bulbasaur));
    }

    return res(ctx.status(404));
  }),
];
