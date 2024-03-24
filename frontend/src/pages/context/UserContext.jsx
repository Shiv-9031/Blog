import { createContext, useState } from "react";

export const userInfo = createContext(null);

function UserContext({ children }) {
  const [account, setAccount] = useState({});
  return (
    <userInfo.Provider value={{ account, setAccount }}>
      {children}
    </userInfo.Provider>
  );
}

export default UserContext;
