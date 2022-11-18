import { Link } from "react-router-dom";

const AssessSelf = () => {
  const styles = {
    backgroundColor: "#a986e2",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    marginLeft: 50,
    border: "none",
    borderRadius: "10px",
    fontSize: "15px",
    color: "#fff",
  };

  return (
    <Link to="/sevices">
      <button style={styles}>Assess yourself</button>
    </Link>
  );
};

export default AssessSelf;
