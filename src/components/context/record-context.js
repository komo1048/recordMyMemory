import { createContext, useState } from "react";

const RecordContext = createContext({
  isLogin: false,
  token: "",
  loginHandler: token => {},
  logoutHandler: () => {},
  deleteMemory: () => {},
});

export const RecordContextProvider = props => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const userIsLogin = !!token;

  const loginHandler = tokenId => {
    setToken(tokenId);
    localStorage.setItem("token", tokenId);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const deleteMemory = async memoryId => {
    await fetch(`https://react-http-38d3b-default-rtdb.firebaseio.com/memoryTest/${memoryId}.json`, {
      method: "DELETE",
    });
  };

  const context = {
    isLogin: userIsLogin,
    loginHandler,
    logoutHandler,
    deleteMemory,
  };

  return <RecordContext.Provider value={context}>{props.children}</RecordContext.Provider>;
};

export default RecordContext;
