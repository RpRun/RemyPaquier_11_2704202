import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainHome from "../../components/Main/MainHome/MainHome";
import bannerAccueil from "../../assets/bannerAccueil.png";

import "./Home.scss";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <Banner>
        <img src={bannerAccueil} alt="landscape-view" />
      </Banner>
      <MainHome />
      <Footer />
    </div>
  );
};

export default Home;
