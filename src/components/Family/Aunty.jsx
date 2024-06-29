import { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./Grandpa";

function Aunty() {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"Habibi"} />
        <Cousin name={"Apu"} />
      </section>
      <p>Money: {money}</p>
      <button onClick={() => setMoney(money + 400)}>Add 400 tk</button>
    </div>
  );
}

export default Aunty;
