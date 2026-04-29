import { useEffect, useState } from "react";

export const useFetch = (url) =>  {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect (() =>  {
    const fetchData = async () =>  {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error (`Error: ${response.status}: ${response.statusText}`);
        }
        const list = await response.json();
        setData(list);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[url]);

  return {data, loading, error};

};