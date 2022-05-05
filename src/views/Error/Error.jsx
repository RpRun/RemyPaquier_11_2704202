import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./Error.css";

const Error = () => {
  return (
    <div id="error">
      <ErrorMessage text="Cette page n existe pas" />
    </div>
  );
};

export default Error;
