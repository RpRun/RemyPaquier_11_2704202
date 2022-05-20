import { LodgeListData } from "../../datas/data";

import { Link } from "react-router-dom";
import "./LodgeList.scss";
import LodgeListItem from "../LodgeListItem/LodgeListItem";
const LodgeList = () => {
  return (
    <ul className="kasa-LodgeList">
      {LodgeListData.map(
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
          <li className="lodgeItemBg">
            <Link to={`${id}`}>
              <LodgeListItem
                key={id}
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
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default LodgeList;
