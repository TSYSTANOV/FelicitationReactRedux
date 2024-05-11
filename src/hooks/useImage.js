import { useEffect, useState } from "react";
import { URI_API } from "../const/const";

function useImage(holiday) {
  const [image, setImage] = useState("");
  useEffect(() => {
    if (holiday) {
      fetch(`${URI_API}image/${holiday}`)
        .then((data) => {
          if (data.status !== 200) {
            throw new Error(data.status);
          }
          return data.json();
        })
        .then((data) => {
          setImage(data);
        })
        .catch((err) => console.error(err));
    }
  }, [holiday]);
  return [image];
}
export { useImage };
