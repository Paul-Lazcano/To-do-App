import React from "react";

export function TodoList(props) {
  return (
    <>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading &&
        Array.isArray(props.searchedTodos) &&
        !props.totalTodos &&
        props.onEmptyTodos()}
      {!!props.totalTodos &&
        Array.isArray(props.searchedTodos) &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}

      <ul className="todo-list">
        {Array.isArray(props.searchedTodos) &&
          props.searchedTodos.map(props.render || props.children)}
      </ul>
    </>
  );
}
