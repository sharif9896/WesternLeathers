import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Ourpolysy from "../components/Ourpolysy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Searchbar from "../components/Searchbar";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-[1340px] mx-auto">
        <Searchbar />
        <ToastContainer />
        <Outlet />
        <Ourpolysy />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App;
