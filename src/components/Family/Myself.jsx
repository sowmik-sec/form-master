import Special from "./Special";

function Myself({ asset }) {
  return (
    <div>
      <h2>Myself</h2>
      <section className="flex">
        <Special asset={asset} />
      </section>
    </div>
  );
}

export default Myself;
