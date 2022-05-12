import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainError from "../../components/Main/MainError/MainError";
import "./Error.scss";

const Error = () => {
  return (
    <div id="error">
      <Header />
      <MainError />
      <Footer />
    </div>
  );
};

export default Error;
