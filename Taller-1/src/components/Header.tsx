type Props = {
  pendientes: number;
};

const Header = ({ pendientes }: Props) => {
  return (
    <header style={styles.header}>
      <h1>📋 Gestor de Tareas</h1>
      <p>Tareas pendientes: {pendientes}</p>
    </header>
  );
};

const styles: { header: React.CSSProperties } = {
  header: {
    background: "#282c34",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
};

export default Header;