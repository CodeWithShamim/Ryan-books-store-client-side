import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home/Home";
import LoginForm from "./components/Login/LoginForm/LoginForm";
import SignupForm from "./components/Login/SignupForm/SignupForm";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import NotFound from "./components/Shared/NotFound/NotFound";
import Blogs from "./components/Blogs/Blogs";
import ForgottonPass from "./components/Login/ForgottonPass";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import AddItems from "./components/AddItems/AddItems";
import Inventory from "./components/Inventory/Inventory";
// ==========react toastify=========
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyItems from "./components/MyItems/MyItems";
import RequireAuth from "./components/Shared/RequireAuth";
// ==========React loading skeleton=========
import "react-loading-skeleton/dist/skeleton.css";
// ============ aos for animation ==============
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Header> </Header>{" "}
      <Routes>
        <Route path="/" element={<Home> </Home>}></Route>
        <Route Route path="/home" element={<Home> </Home>}></Route>
        <Route path="/blogs" element={<Blogs> </Blogs>}></Route>
        <Route path="/login" element={<LoginForm> </LoginForm>}></Route>
        <Route
          Route
          path="/signup"
          element={<SignupForm> </SignupForm>}
        ></Route>
        <Route
          path="/reset-password"
          element={<ForgottonPass> </ForgottonPass>}
        ></Route>{" "}
        <Route
          path="/manage-inventory"
          element={
            <RequireAuth>
              <ManageInventory> </ManageInventory>{" "}
            </RequireAuth>
          }
        ></Route>{" "}
        <Route
          path="/add-items"
          element={
            <RequireAuth>
              <AddItems> </AddItems>{" "}
            </RequireAuth>
          }
        ></Route>{" "}
        <Route
          path="/my-items"
          element={
            <RequireAuth>
              <MyItems> </MyItems>{" "}
            </RequireAuth>
          }
        ></Route>{" "}
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory> </Inventory>{" "}
            </RequireAuth>
          }
        ></Route>{" "}
        <Route path="*" element={<NotFound> </NotFound>}></Route>
      </Routes>{" "}
      <Footer> </Footer> {/* ==========react toastify========= */}{" "}
      <ToastContainer />
    </div>
  );
}

export default App;
