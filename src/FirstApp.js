import "./styles.css";
import { useState } from "react";
//abilitando estado dinamico (Hooks)
//useState nos permite crear estados

//debemos hacer una linea para desestructurar un arreglo (useState)

//creando arreglo para imprimirlo
const categorias = ["primer categoria", "segunda categoria"];

//variable, funcion que actualiza variable
const FirstApp = ({ value }) => {
  const [contador, setCounter] = useState(value);
  const [category, setCategory] = useState(categorias);

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

  //reset contador
  const handlePog = () => {
    setCounter(value);
  };

  //creando input tag para meter texto

  const myf = (e) => {
    setCounter(e.target.value);
    //console.log(e);
    //console.log(e.target.value);
    //console.log(categorias);
  };

  //agregar categorias
  const myf2 = (e) => {
    setCategory([...categorias, contador]);
    setCategory((list) => [...list, categorias]);
    console.log(categorias);
  };

  return (
    <>
      <h1> contador </h1>
      <span> {contador} </span>
      <button onClick={() => handleAdd()}> +1 </button>
      <button onClick={() => handleRest()}> -1 </button>
      <button onClick={() => handlePog()}> 0 </button>
      <h1> Imprimiendo arreglos </h1>
      <ol>
        {categorias.map((categoria, llave) => {
          return <li llave={llave}> {categoria} </li>;
        })}
      </ol>
      <h1> Sacando cosas y metiendolas</h1>
      <label for="fname">Escribe aqui porfa:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        onChange={(e) => myf(e)}
      ></input>
      <button onClick={(e) => myf2(e)}> algo</button>
    </>
  );
};

export default FirstApp;
