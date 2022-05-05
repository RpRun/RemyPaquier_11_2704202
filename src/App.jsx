import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import Error from "./views/Error/Error";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
