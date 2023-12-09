//useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";
import { SECRET, URL } from "../api/api";

function useFetch(search) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search) {
      setLoading("loading...");
      setData({});
      setError(null);
      axios
        .get(`${URL}?apikey=${SECRET}&t=${search}`)
        .then((response) => {
          setLoading(false);
          if (response.data.Error === "Movie not found!")
            setError("Movie Not found");
          else {
            setData(response.data);
          }
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }
  }, [search]);

  return { data, loading, error };
}

export default useFetch;
