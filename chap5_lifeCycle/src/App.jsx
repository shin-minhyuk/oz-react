// import { Component, useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [showCounter, setShowCounter] = useState(false);
//   const show = () => setShowCounter((prev) => !prev);

//   return (
//     <>
//       {showCounter && <Counter />}
//       <br />
//       <button onClick={show}>show ?</button>
//     </>
//   );
// }

// function Counter() {
//   const [counter, setCounter] = useState(1);
//   const UP = () => {
//     setCounter((prev) => prev + 1);
//   };

//   useEffect(() => {
//     console.log("useEffect");
//   }, []);

//   return (
//     <>
//       <div>counter: {counter}</div>
//       <button onClick={UP}>+</button>
//     </>
//   );
// }

// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = { counter: 1 };
//     console.log("constructor");
//   }

//   // 생성 될 때
//   componentDidMount() {
//     console.log("DidMount");
//   }
//   // 업데이트 할 때
//   componentDidUpdate() {
//     console.log("DidUpdate");
//   }
//   // 제거 할 때
//   componentWillUnmount() {
//     console.log("WillUnmount");
//   }

//   render() {
//     console.log("render");
//     return (
//       <>
//         <div>counter: {this.state.counter}</div>
//         <button
//           onClick={() => this.setState({ counter: this.state.counter + 1 })}
//         >
//           +
//         </button>
//       </>
//     );
//   }
// }

// export default App;
