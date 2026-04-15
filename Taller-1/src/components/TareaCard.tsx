import React from "react";
import type { Tarea } from "../data/tareas";

type Props = Tarea;

const TareaCard: React.FC<Props> = ({ titulo, materia, fecha, completada }) => {
  return (
    <div style={styles.card}>
      <h3>{titulo}</h3>
      <p><strong>Materia:</strong> {materia}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p>
        <strong>Estado:</strong>{" "}
        {completada ? "✅ Completada" : "⏳ Pendiente"}
      </p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    width: "250px"
  }
};

export default TareaCard;
