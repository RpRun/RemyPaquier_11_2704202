import Banner from "../../components/Banner/Banner";
import MainAbout from "../../components/Main/MainAbout/MainAbout";
import aboutBanner from "../../assets/aboutBanner.png";
import "./About.scss";

const About = () => {
  return (
    <div id="About">
      <Banner>
        <img src={aboutBanner} alt="mountain-view" />
      </Banner>
      <MainAbout />
    </div>
  );
};

export default About;
