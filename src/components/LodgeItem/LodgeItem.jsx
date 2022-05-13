import "./LodgeItem.scss";

// const LodgeItem = () => {
//   return <div className="lodgeItem"></div>;
// };

// export default LodgeItem;

const LodgeItem = ({
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
      <div className="lodgeImg"></div>
      <div className="lodgeTitle">{title}</div>
    </>
  );
};

export default LodgeItem;
