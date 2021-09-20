import CharCard from "../CharCard";
import "./styles.css";
const Characters = ({ characterList }) => {
  return (
    <div className="characters">
      {characterList.map((item, index) => (
        <div className={item.status + " " + "characters__img"} key={index}>
          <CharCard item={item} />
        </div>
      ))}
    </div>
  );
};
export default Characters;
