import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  useEffect(() => {
    if (url) {
      async function getData() {
        try {
          await fetch(url)
            .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error(response.status);
              }
            })
            .then((res) => {
              setData(res);
            });
        } catch (error) {
          setError(error.message);
          //   setData({});
        }
      }
      getData();
    }
  }, [url]);
  return data;
}
export { useFetch };
