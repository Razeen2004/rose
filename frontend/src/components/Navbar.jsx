import { useContext, useState } from "react";
import { Context } from "./Context";

const Navbar = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Wrapper />
      <Context.Provider value={{ count, setCount }}>
        <Count />
        <button />
      </Context.Provider>
    </div>
  );
};

function Wrapper() {
  return (
    <>
      <Count />
      <Button />
    </>
  );
}

function Count() {
  const count = useContext(Context);
  return <div>{count}</div>;
}

function Button() {
  const { count, setCount } = useContext(Context);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Navbar;
