import "./LodgeListItem.scss";

const LodgeListItem = ({
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
      <div className="lodgeListItemBg">
        <img src={cover} alt={tags} />
      </div>
      <div className="lodgeListItemTitle">{title}</div>
    </>
  );
};

export default LodgeListItem;
