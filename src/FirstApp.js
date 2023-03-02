import "./styles.css";
import { useState } from "react";

//variable, funcion que actualiza variable
const FirstApp = ({ value }) => {
  const [contador, setCounter] = useState(value);

  console.log(data);
  const handleAdd = () => {
    //    console.log("llamada a handle");
    //    {
    //      value = value + 1;
    //    }
    //    console.log(value);
    //    return value;

    setCounter(contador + 1);
  };

  //quitar contador
  const handleRest = () => {
    setCounter(contador - 1);
  };

  return (
    <>
      <h1> contador </h1>
      <span> {contador} </span>
      <button onClick={() => handleAdd()}> +1 </button>
      <button onClick={() => handleRest()}> -1 </button>
      <h1> Imprimiendo arreglos </h1>
    </>
  );
};

export default FirstApp;
