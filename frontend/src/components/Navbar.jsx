import { useContext, useState } from "react";
import { Context } from "./Context";

const Navbar = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Context.Provider value={count}>
        <Wrapper setCount={setCount} />
      </Context.Provider>
    </div>
  );
};

function Wrapper({ setCount }) {
  return (
    <>
      <Count />
      <Button setCount={setCount} />
    </>
  );
}

function Count() {
  const count = useContext(Context);
  return <div>{count}</div>;
}

function Button({ setCount }) {
  const count = useContext(Context);

  return (
    <div>
      <button
        onClick={() => {
          return setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          return setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Navbar;
