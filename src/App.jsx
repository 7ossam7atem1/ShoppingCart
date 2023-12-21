import { Outlet } from "react-router-dom";
import "./App.css";
import NavItems from "./components/Navitems";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavItems></NavItems>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
