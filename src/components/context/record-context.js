import { createContext, useState } from "react";

const RecordContext = createContext({
  isLogin: false,
  token: "",
  loginHandler: token => {},
  logoutHandler: () => {},
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

  const context = {
    isLogin: userIsLogin,
    loginHandler,
    logoutHandler,
  };

  return <RecordContext.Provider value={context}>{props.children}</RecordContext.Provider>;
};

export default RecordContext;
