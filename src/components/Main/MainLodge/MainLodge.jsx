import { useParams } from "react-router-dom";
import { LodgeListData } from "../../../datas/data";
import ImageSlider from "../../ImageSlider/ImageSlider";
import DropDown from "../../DropDown/DropDown";

import "./MainLodge.scss";

import TagsList from "../../TagsList/TagsList";
import LodgePageTitle from "../../LodgePageTitle/LodgePageTitle";
import HostInfos from "../../HostInfos/HostInfos";

const MainLodge = () => {
  const { id } = useParams();

  const lodge = LodgeListData.find((Lodge) => Lodge.id === id);
  // const lodgeEquipments = lodge.equipments.split(" ");

  // let lodgeList = "<ul>";
  // lodge.equipments.map((equipment) => {
  //   lodgeList += `<li>${equipment}</li>`;
  // });
  // lodgeList += "<ul/>";

  return (
    <main className="mainLodge">
      <>
        <ImageSlider slides={lodge.pictures} />
        <section className="mainInformation">
          <div className="lodgeInfos">
            <LodgePageTitle title={lodge.title} text={lodge.location} />
            <TagsList tags={lodge.tags} />
          </div>
          <HostInfos
            hostName={lodge.host.name}
            picture={lodge.host.picture}
            rate={lodge.rating}
          />
        </section>

        <section className="LodgesDropDowns">
          <ul>
            <DropDown title="Description" text={lodge.description} />

            <DropDown title="Equipements" text={lodge.equipments} />
          </ul>
        </section>
      </>
    </main>
  );
};

export default MainLodge;
