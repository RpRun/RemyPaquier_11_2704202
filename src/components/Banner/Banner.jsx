// import BannerMessage from "../BannerMessage/BannerMessage";
import "./Banner.scss";

const Banner = ({ children }) => {
  return <div className="bannerBg">{children}
  </div>;
};

export default Banner;
