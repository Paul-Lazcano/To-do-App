import React from "react";

export function TodoCounter({ completedTodos, totalTodos, loading }) {
  if (!!totalTodos) {
    return (
      <h1 className="counter">{`Has completado ${completedTodos || 0} de ${
        totalTodos || 0
      } tareas`}</h1>
    );
  } else if (!!loading) {
    return <h1 className="counter">Cargando...</h1>
  } else {
    return <h1 className="counter">No has agregado ninguna tarea</h1>;
  }
}
