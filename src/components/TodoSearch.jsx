import React from "react";

export function TodoSearch({searchValue, setSearchValue}) {

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
