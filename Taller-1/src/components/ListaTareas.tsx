import { tareasIniciales } from "../data/tareas";
import TareaCard from "./TareaCard";

const ListaTareas = () => {
  return (
    <div style={styles.container}>
      {tareasIniciales.map((tarea) => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </div>
  );
};

const styles: { container: React.CSSProperties } = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default ListaTareas;