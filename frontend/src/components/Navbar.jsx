import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { count } from "../store/atoms/count";

const Navbar = () => {
  
  console.log("re-render Navbar Component")
  return (
    <div>
      <RecoilRoot>
        <Wrapper />
      </RecoilRoot>
    </div>
  );
};

function Wrapper() {
  console.log("re-render Wrapper Component")
  return (
    <>
      <Count />
      <Button />
    </>
  );
}

function Count() {
  const Count = useRecoilValue(count);

  return <div>{Count}</div>;
}

function Button() {
  
  const [Count, setCount] = useRecoilState(count);

  return (
    <div>
      <button
        onClick={() => {
          return setCount(Count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          return setCount(Count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Navbar;
