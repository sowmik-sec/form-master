import Brother from "./Brother";
import Myself from "./Myself";
import Sister from "./Sister";

function Dad({ asset }) {
  return (
    <div>
      <h2>Dad</h2>
      <section className="flex">
        <Myself asset={asset} />
        <Brother />
        <Sister />
      </section>
    </div>
  );
}

export default Dad;
