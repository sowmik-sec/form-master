import Friend from "./Friend";

function Cousin({ name }) {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      {name === "Apu" && <Friend />}
    </div>
  );
}

export default Cousin;
