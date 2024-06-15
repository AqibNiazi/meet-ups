import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={loading}
      cssOverride={override}
      size={10}
      aria-label="Loading Spinner"
    />
  );
};
export default Spinner;
