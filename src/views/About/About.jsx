import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import MainAbout from "../../components/Main/MainAbout/MainAbout";
import aboutBanner from "../../assets/aboutBanner.png";
import "./About.scss";

const About = () => {
  return (
    <div id="About">
      <Header />
      <Banner>
        <img src={aboutBanner} alt="mountain-view" />
      </Banner>
      <MainAbout />
      <Footer />
    </div>
  );
};

export default About;
