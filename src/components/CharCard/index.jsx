import "./styles.css";
const CharCard = ({ item }) => {
  return (
    <div className="card">
      <h4 key={item.status}>
        {item.name.length > 15
          ? item.name
              .split("")
              .filter((item, index) => index < 15)
              .join("") + "..."
          : item.name}
      </h4>
      <div>
        <img src={item.image} alt="" key={item.id}></img>
      </div>
      <div className="species" key={item.id}>
        {item.species}
      </div>
    </div>
  );
};
export default CharCard;
