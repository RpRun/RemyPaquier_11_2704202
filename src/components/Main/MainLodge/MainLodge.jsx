import { useParams } from "react-router-dom";
import { LodgeListData } from "../../../datas/data";
import ImageSlider from "../../ImageSlider/ImageSlider";
import DropDown from "../../DropDown/DropDown";

import "./MainLodge.scss";
import Title from "../../Title/Title";
import TagsList from "../../TagsList/TagsList";

const MainLodge = () => {
  const { id } = useParams();

  const lodge = LodgeListData.find((Lodge) => Lodge.id === id);

  return (
    <main className="mainLodge">
      <>
        <ImageSlider slides={lodge.pictures} />
        <Title title={lodge.title} text={lodge.location} />
        <TagsList tags={lodge.tags} />
        <img src={lodge.host.picture} alt="pouet" />
        <p>{lodge.rating}</p>

        <section className="LodgesDropDowns">
          <ul>
            <DropDown title="Description" text={lodge.description} />

            <DropDown title="Equipements" text={lodge.equipments} />
          </ul>
        </section>

        <p>{lodge.host.name}</p>
      </>
    </main>
  );
};

export default MainLodge;
