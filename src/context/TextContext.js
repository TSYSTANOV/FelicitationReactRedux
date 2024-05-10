import { createContext, useState } from "react";

export const textContent = createContext({});
export const TextContext = ({ children }) => {
  const [text, setText] = useState(
    `Поздравляю с днем рожденья!
        Пусть будет жизнь полна веселья,
        Не будет грусти и хлопот,
        А только счастье круглый год!
        
        Желаю творческих успехов,
        Прекрасных дней, улыбок, смеха.
        Любви, душевного тепла,
        Как сказка, чтобы жизнь была!
        `
  );
  return (
    <textContent.Provider value={{ text, setText }}>
      {children}
    </textContent.Provider>
  );
};
