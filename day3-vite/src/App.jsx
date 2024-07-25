import { useState } from "react";
import "./App.css";

// function App() {
//   const [num, setNum] = useState(0);
//   const [value, setValue] = useState(0);

//   const incrementNum = () => {
//     setNum(num + 1);
//   };

//   const decrementNum = () => {
//     setNum(num - 1);
//   };

//   const setCountNum = () => {
//     setNum(value);
//   };

//   console.log("값: ", value);
//   return (
//     <>
//       <Numbering number={num} />
//       <Plus abc={setNum} aaa={incrementNum} />
//       <Minus def={setNum} bbb={decrementNum} />
//       <br></br>
//       <NumInput
//         inpValue={value}
//         ghi={setValue}
//         setNum={setNum}
//         setCountNum={setCountNum}
//       />
//     </>
//   );
// }

// function NumInput(props) {
//   const { inpValue, ghi, setNum, setCountNum } = props;
//   console.log(props);
//   return (
//     <>
//       <input
//         type="number"
//         value={inpValue}
//         // onchange 이벤트가 발생할 때, 이벤트 타겟의 값을 value에 할당하는 함수.
//         onChange={(event) => {
//           ghi(event.target.value);
//           // setNum(event.target.value);
//         }}
//       />
//       <button onClick={setCountNum}>입력</button>
//     </>
//   );
// }

// function Plus(props) {
//   const { abc, aaa } = props;

//   return <button onClick={aaa}>+</button>;
// }

// function Minus(props) {
//   // console.log(props); => {def: f}
//   const { def, bbb } = props;
//   return <button onClick={bbb}>-</button>;
// }

// function Numbering(props) {
//   const { number, bbb } = props;
//   return <div>counter: {number}</div>;
// }

// class App extends Component {
//   // 상태 지정
//   state = { counter: 0 };

//   // 상태 변경 함수 지정
//   incrementCounter = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };

//   decrementCounter = () => {
//     this.setState({ counter: this.state.counter - 1 });
//   };

//   render() {
//     return (
//       <>
//         <Count counter={this.state.counter} />
//         <PlusBtn incrementCounter={this.incrementCounter} />
//         <MinusBtn decrementCounter={this.decrementCounter} />
//       </>
//     );
//   }
// }

// class PlusBtn extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log("+: ", this.props);
//     return <button onClick={this.props.incrementCounter}>+</button>;
//   }
// }

// class MinusBtn extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log("-: ", this.props);
//     return <button onClick={this.props.decrementCounter}>-</button>;
//   }
// }

// // 이 컴포넌트가 어떤 의미, 상태, 행동을 가지고 있는지? 부터 생각
// // 버튼의 클릭에 따라서 화면의 카운터 상태가 변화되는 컴포넌트
// // this.props = counter: 0
// class Count extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     // console.log(this.props);
//     return <div>counter: {this.props.counter}</div>;
//   }
// }

function App() {
  let [array, setArray] = useState([1, 2, 3]);
  console.log("rerendaring", Math.random(1).toFixed(2));

  const handler = () => {
    const newArray = [...array]; // array.slice();
    newArray.push(5);
    setArray(newArray);
    console.log(newArray);
  };

  return (
    <>
      array : [{array.join(",")}]
      <br />
      <button onClick={handler}>상태 업데이트</button>
    </>
  );
}
export default App;
