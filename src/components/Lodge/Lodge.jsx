import "./Lodge.scss";

const Lodge = ({
  title,
  cover,
  pictures,
  description,
  host,
  rating,
  location,
  equipments,
  tags,
}) => {
  return (
    <>
      <div className="lodgeImgBg">
        <img src={cover} alt={tags} />
      </div>
      <div className="lodgeTitle">{title}</div>
    </>
  );
};

export default Lodge;
