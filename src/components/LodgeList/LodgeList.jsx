import { LodgeListData } from "../../datas/data";
import Lodge from "../Lodge/Lodge";
import { Link } from "react-router-dom";
import "./LodgeList.scss";
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
              <Lodge
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
