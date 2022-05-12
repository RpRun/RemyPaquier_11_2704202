import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainHome from "../../components/Main/MainHome/MainHome";

import "./Home.scss";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <MainHome />
      <Footer />
    </div>
  );
};

export default Home;
