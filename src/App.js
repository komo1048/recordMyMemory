import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Join from "./components/Join/Join";
import Container from "./components/container/Container";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login to="/login" />} />
        <Route path="/main" element={<Container />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </>
  );
}
export default App;
