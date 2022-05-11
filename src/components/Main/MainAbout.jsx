import Banner from "../Banner/Banner";
import DropDown from "../DropDown/DropDown";
import "./MainAbout.scss";

const MainAbout = () => {
  return (
    <main className="mainAbout">
      <Banner />
      <ul>
        <DropDown text="Fiabilité" />

        <DropDown text="Respect" />

        <DropDown text="Service" />

        <DropDown text="Responsabilité" />
      </ul>
    </main>
  );
};

export default MainAbout;
