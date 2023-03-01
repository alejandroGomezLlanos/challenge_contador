import { useEffect, useState } from "react";
export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isloading: true,
    hasError: null
  });

  const getFetch = async () => {
    const api = await fetch(url);
    const data = await api.json();

    setState({
      data,
      isloading: false,
      hasError: null
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    ...state
  };
};
