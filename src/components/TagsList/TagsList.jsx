import "./TagsList.scss";

const TagsList = ({ tags }) => {
  return (
    <ul className="tagsList">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
};

export default TagsList;
