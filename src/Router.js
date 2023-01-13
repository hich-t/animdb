import { Route, Routes } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";


const Router = () => {


  return (
    <>
    <div className="topframe">
      <Navbar />
      <SearchBar />      
     </div>
      <Routes>
        <Route path="/" element={<App />} />
      
      </Routes>
      </>
  );
};

export default Router;