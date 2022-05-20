import "./DropDownList.scss";

const DropDownList = ({ text }) => {
  return (
    <ul className="equipmentsList">
      {text.map((element) => (
        <li key={element}>{element}</li>
      ))}
    </ul>
  );
};

export default DropDownList;
