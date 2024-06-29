import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";
import "./Grandpa.css";
// import { createContext } from "react";

// const AssetContext = createContext("gold");

function Grandpa() {
  const asset = "Diamond";
  return (
    <div className="grandpa ">
      <h2>Grandpa</h2>
      {/* <AssetContext.Provider value="gold"> */}
      <section className="flex">
        <Dad asset={asset} />
        <Uncle />
        <Aunty />
      </section>
      {/* </AssetContext.Provider> */}
    </div>
  );
}

export default Grandpa;
