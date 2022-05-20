import StarRating from "../StarRating/StarRating";
import "./HostInfos.scss";

const HostInfos = ({ hostName, picture, rate }) => {
  const note = parseInt(rate);

  return (
    <div className="hostInfos">
      <div className="hostProfile">
        <p>{hostName}</p>
        <img className="avatar" src={picture} alt="host avatar" />
      </div>
      <StarRating note={note} />
    </div>
  );
};

export default HostInfos;
