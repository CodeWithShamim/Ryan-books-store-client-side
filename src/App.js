import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import LoginForm from "./components/Login/LoginForm/LoginForm";
import SignupForm from "./components/Login/SignupForm/SignupForm";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import NotFound from "./components/Shared/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route path="/signup" element={<SignupForm></SignupForm>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
