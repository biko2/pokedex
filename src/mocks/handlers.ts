import { rest } from "msw";
import bulbasaur from "./data/bulbasaur.json";

export const handlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon/:identifier", (req, res, ctx) => {
    const { identifier } = req.params;

    if (identifier === "bulbasaur" || identifier === "1") {
      return res(ctx.status(200), ctx.json(bulbasaur));
    }

    return res(ctx.status(404));
  }),
];
