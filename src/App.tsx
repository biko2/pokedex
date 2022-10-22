import { Tag } from "components/Tag";
import { Icon } from "components/Icon";
import { Pokeball } from "components/Icon/icons/Pokeball";

export const App = () => {
  return (
    <main>
      <h1>My Pokedex</h1>
      <Tag color="ground">Ground</Tag>
      <Icon icon={Pokeball} />
    </main>
  );
};
