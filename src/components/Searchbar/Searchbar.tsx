import { Icon } from "components/Icon";
import { Search } from "components/Icon/icons/Search";
import { KeyboardEvent, useState } from "react";
import styles from "./Searchbar.module.css";

type SearchbarProps = {
  onSearch: (inputValue: string) => void;
};

export const Searchbar: React.FC<SearchbarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(inputValue);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <label htmlFor="searchbar" className={styles.wrapper}>
      <Icon icon={Search} />
      <input
        autoComplete="off"
        type="search"
        name="searchbar"
        data-testid="searchbar"
        className={styles.search}
        onKeyDown={handleEnter}
        onChange={handleChange}
        value={inputValue}
      />
    </label>
  );
};
