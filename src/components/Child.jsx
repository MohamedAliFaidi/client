import { useBearStore } from "../stores/bearStore";
function Child() {
  const [increasePopulation, removeAllBears] = useBearStore((state) => [
    state.increasePopulation,
    state.removeAllBears,
  ]);

  return (
    <div>
      <button onClick={() => increasePopulation()}>increasePopulation</button>
      <button onClick={() => removeAllBears()}>kill all bears</button>
    </div>
  );
}

export default Child;
