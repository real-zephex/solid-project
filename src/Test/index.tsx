import { Accessor } from "solid-js";

const Test = ({ count }: { count: Accessor<number> }) => {
  return (
    <div>
      <p>{count() % 2 === 0 ? "even" : "odd"}</p>
    </div>
  );
};
export default Test;
