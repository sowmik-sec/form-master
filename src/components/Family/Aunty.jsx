import Cousin from "./Cousin";

function Aunty() {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"Habibi"} />
        <Cousin name={"Apu"} />
      </section>
    </div>
  );
}

export default Aunty;
