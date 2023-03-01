import "./styles.css";
import PropTypes from "prop-types";
//componente con una variable
//const title = "Hola Mundo";

//test de cambios

//no olvidar que puedo llamar
//props (llamando siempre abajo props.llave)
//o desestructurarlo
//{llave1,llav2} (abajo llamo solo las llaves)

const App = ({ titulo, sum }) => {
  return (
    <>
      <h1> {titulo} </h1>
      <span> {sum} </span>
      <h2> {sum + 1} </h2>
    </>
  );
};

App.propTypes = {
  titulo: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
};

//valores por defecto
//este es nuestro constructor por si no mandamos nada
App.defaultProps = {
  titulo: "sin titulo",
  sum: 20,
};

export default App;
