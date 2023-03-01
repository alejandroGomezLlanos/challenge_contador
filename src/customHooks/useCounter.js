//Hook custom para manejar esto
import { useEffect, useState } from "react";
export const useCounter = (algooooo) => {
  const [contador, setCounter] = useState(value);

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
};
