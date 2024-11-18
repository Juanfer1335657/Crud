import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>hola</h1>
      <div style={{ textAlign: "center" }}>
        <Link
          style={{
            color: "Blue",
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
          to="Crud"
        >
          {" "}
          Crud{" "}
        </Link>
      </div>
    </>
  );
}

export default App;
