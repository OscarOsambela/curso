import React from "react";

const cardStyles = {
  background: "#202020",
  color: "#fff",
  padding: "20px",
};
const taskStyles = {
  fontWeight: "lighter",
};

const TaskCard = ({ ready, text }) => {
  return (
    <div style={cardStyles}>
      <h1 style={ready ? { color: "green" } : { color: "blue" }}>
        {text}
      </h1>
      <span className={ready ? 'card' : 'bg-red'}>{ready ? "Tarea realizada" : "Tarea pendiente"}</span>
    </div>
  );
};

export function Task() {
  return (
    <div style={taskStyles}>
      <p>Primer task</p>
    </div>
  );
}

export default TaskCard;
