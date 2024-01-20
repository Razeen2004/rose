import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { count, evenSelector } from "../store/atoms/count";

const Navbar = () => {
  console.log("re-render Navbar Component");
  return (
    <div>
      <RecoilRoot>
        <Wrapper />
      </RecoilRoot>
    </div>
  );
};

function Wrapper() {
  console.log("re-render Wrapper Component");
  return (
    <>
      <Count />
      <Button />
      <Even />
    </>
  );
}

function Count() {
  const Count = useRecoilValue(count);

  return <div>{Count}</div>;
}

function Button() {
  console.log("re-render Button Component");
  // const [Count, setCount] = useRecoilState(count);
  const setCount = useSetRecoilState(count);

  return (
    <div>
      <button
        onClick={() => {
          return setCount((Count) => Count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          return setCount((Count) => Count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

function Even() {
  const isEvenToggle = useRecoilValue(evenSelector);

  return <div>{isEvenToggle ? "This number is Even" : ""}</div>;
}

export default Navbar;
