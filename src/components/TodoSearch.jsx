import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/index";

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Busca alguna tarea"
      className="searcher"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}
