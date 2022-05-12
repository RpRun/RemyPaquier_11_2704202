import { accommodationList } from "../../datas/accommodationList";
import LodgeItem from "../LodgeItem/LodgeItem";
import "./LodgeList.scss";
const LodgeList = () => {
  return (
    <ul className="kasa-LodgeList">
      {accommodationList.map(
        ({
          id,
          title,
          cover,
          pictures,
          description,
          host,
          rating,
          location,
          equipments,
          tags,
        }) => (
          <li className="lodgeItemBg" key={id}>
            <LodgeItem
              title={title}
              cover={cover}
              pictures={pictures}
              description={description}
              host={host}
              rating={rating}
              location={location}
              equipments={equipments}
              tags={tags}
            />
          </li>
        )
      )}
    </ul>
  );
};

export default LodgeList;
