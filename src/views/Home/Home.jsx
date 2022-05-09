import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import Title from "../../components/Title/Title";
import "./Home.scss";

const Home = () => {
  return (
    <div id="home">
      <Title text="Home Page" />
      <Menu />
      <Footer />
    </div>
  );
};

export default Home;
