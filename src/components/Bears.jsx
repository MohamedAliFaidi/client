import { useBearStore } from "../stores/bearStore";

function Bears() {

    const [bears] = useBearStore((state) => [
        state.bears,
    ]);

    return (
        <div>{bears}</div>
    )
}

export default Bears