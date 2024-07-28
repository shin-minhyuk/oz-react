import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  return (
    <>
      <ControlledInput />
      <br />
      <UseRefInput />
    </>
  );
}

export default App;

const UseRefInput = () => {
  const inputRef = useRef(null);

  const getInputValue = () => {
    console.log(inputRef.current.value);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={getInputValue}>출력</button>
      <br />
      <button onClick={focusInput}>포커스</button>
      <br />
      <Counter />
    </>
  );
};

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const couterRef = useRef(null);

  return (
    <>
      <div>counter: {counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      <br />
      <button
        onClick={() => {
          couterRef.current = counter;
        }}
      >
        Keep Value
      </button>
      <button
        onClick={() => {
          console.log(couterRef.current);
        }}
      >
        Show Value
      </button>
    </>
  );
};
const ControlledInput = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </>
  );
};
