import React, { useEffect, useState } from "react";

type FetchReturn<T> = {
  data: T;
  loading: boolean;
  error?: unknown;
};

export default function useFetch<T>(url: string): FetchReturn<T | null> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const parsedResponse = await response.json();
        setData(parsedResponse as T);
      } catch (e) {
        // alert("we could not get the data");
        //console.warn("there was an error while getting the data", e);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return {
    data,
    loading,
  };
}
