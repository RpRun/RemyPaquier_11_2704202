import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./router";
import "./styles/main.scss";
import "@fontsource/montserrat";

const App = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default App;
