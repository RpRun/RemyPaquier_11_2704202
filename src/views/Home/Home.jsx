import Banner from "../../components/Banner/Banner";
import MainHome from "../../components/Main/MainHome/MainHome";
import bannerAccueil from "../../assets/bannerAccueil.png";

import "./Home.scss";
import BannerMessage from "../../components/BannerMessage/BannerMessage";

const Home = () => {
  return (
    <div id="home">
      <Banner>
        <img src={bannerAccueil} alt="landscape-view" />
        <BannerMessage />
      </Banner>
      <MainHome />
    </div>
  );
};

export default Home;
