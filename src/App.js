import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Join from "./components/Join/Join";
import Container from "./components/container/Container";
import Profile from "./components/myPage/Profile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login to="/login" />} />
        <Route path="/main" element={<Container />} />
        <Route path="/join" element={<Join />} />
        <Route path="/myProfile" element={<Profile />} />
      </Routes>
    </>
  );
}
export default App;
