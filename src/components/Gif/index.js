import style from "../../styles/styles.module.css";

const Gif = ({ source, title }) => {
  return (
    <div className="gif">
      <img src={source} alt={title} />
    </div>
  );
};

export default Gif;
