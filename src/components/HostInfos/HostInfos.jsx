import "./HostInfos.scss";
const HostInfos = ({ hostName, picture, rate }) => {
  return (
    <div className="hostInfos">
      <div className="hostProfile">
        <p>{hostName}</p>
        <img className="avatar" src={picture} alt="host avatar" />
      </div>

      <p>{rate}</p>
    </div>
  );
};

export default HostInfos;
