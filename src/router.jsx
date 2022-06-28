import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Error from "./views/Error/Error";
import Lodge from "./views/Lodge/Lodge";

const Router = () => {
  return (
    <Routes>   
      <Route path="/RemyPaquier_11_2704202/" element={<Home />} />
      <Route path="/RemyPaquier_11_2704202/About" element={<About />} />
      <Route path="/RemyPaquier_11_2704202/:id" element={<Lodge />} />
      <Route path="/RemyPaquier_11_2704202/*" element={ <Navigate replace to='/error-page' /> } />
      <Route path="/error-page" element={<Error />} />
    </Routes>
  );
};

export default Router;
