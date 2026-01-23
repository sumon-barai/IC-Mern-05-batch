import { useEffect, useState } from "react";

function useGetFetch(callback) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await callback();
        setData(response);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, data, error };
  // return [loading,error, data];
}

export default useGetFetch;
