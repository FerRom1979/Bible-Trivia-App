import { useState, useEffect } from "react";

export const useFetchData = (
  endpoint: string,
  error_msg = "An error has ocurred getting the data",
  userData: any,
) => {
  console.log({ endpoint, error_msg, userData });

  const [fetch_data, setFetchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const BASE_URL = `${process.env.REACT_APP_API_URL}/${endpoint}` || "";
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      //Pedimos los datos a la api
      try {
        const response = await window.fetch(BASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(userData),
        });
        if (!response.ok) {
          throw new Error(`Http status ${response.status}`);
        }
        const data = await response.json();
        console.log({ data });
        setFetchData(data.results);
      } catch (error) {
        //Si hay un error ...
        console.error(error);
        setError(error_msg);
      }
      setLoading(false);
    };
    fetchData();
  }, [BASE_URL, error_msg, userData]); //Hacer enfasis en la url
  //Retornamos nuestro fetch_data como data, nuestro loading y error
  return { data: fetch_data, loading, error };
};
