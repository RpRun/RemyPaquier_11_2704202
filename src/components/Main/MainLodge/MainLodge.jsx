import { useParams, Navigate } from "react-router-dom";
import { LodgeListData } from "../../../datas/data";
import ImageSlider from "../../ImageSlider/ImageSlider";
import DropDown from "../../DropDown/DropDown";
import TagsList from "../../TagsList/TagsList";
import LodgePageTitle from "../../LodgePageTitle/LodgePageTitle";
import HostInfos from "../../HostInfos/HostInfos";
import "./MainLodge.scss";
import { useState } from "react";

const MainLodge = () => {
  const { id } = useParams();
  const [lodge, setLodge] = useState(() => {
    return LodgeListData.find((Lodge) => Lodge.id === id)
  })

  return (
    lodge
    ? <main className="mainLodge">
        <ImageSlider slides={lodge.pictures} />
        <div className="practicalInformation">
          <div className="lodgeInfos">
            <LodgePageTitle title={lodge.title} text={lodge.location} />
            <TagsList tags={lodge.tags} />
          </div>
          <HostInfos
            hostName={lodge.host.name}
            picture={lodge.host.picture}
            rate={lodge.rating}
          />
        </div>

        <div className="lodgeDropDowns">
          <ul>
            <DropDown title="Description" text={lodge.description} />

            <DropDown title="Equipements" text={lodge.equipments} />
          </ul>
        </div>
      </main>
    : <Navigate replace to='/error-page' />
  );
};

export default MainLodge;
