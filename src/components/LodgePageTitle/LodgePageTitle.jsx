import "./LodgePageTitle.scss";

const LodgePageTitle = ({ title, text }) => {
  return (
    <>
      <h1 className="lodgePageTitle">{title}</h1>
      <p>{text}</p>
    </>
  );
};

export default LodgePageTitle;
