import { Tag } from "components/Tag";
import { Icon } from "components/Icon";
import { Search } from "components/Icon/icons/Search";

export const App = () => {
  return (
    <main>
      <h1>My Pokedex</h1>
      <Tag color="ground">ground</Tag>
      <Icon icon={Search} />
    </main>
  );
};
