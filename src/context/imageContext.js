import { createContext, useState } from "react";

export const imageContext = createContext({});
export const ImageContext = ({ children }) => {
  const [img, setImg] = useState("");
  return (
    <imageContext.Provider value={{ img, setImg }}>
      {children}
    </imageContext.Provider>
  );
};
