import { useContext } from "react";
import { MoneyContext } from "./Grandpa";

function Brother() {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h2>Brother</h2>
      <p>Money: {money}</p>
    </div>
  );
}

export default Brother;
