import React from "react";

export function TodoCounter({completedTodos, totalTodos}) {

  if (!!totalTodos) {
    return (
      <h1 className="counter">{`Has completado ${completedTodos || 0} de ${
        totalTodos || 0
      } tareas`}</h1>
    );
  } else {
    return <h1 className="counter">No has agregado ninguna tarea</h1>;
  }
}
