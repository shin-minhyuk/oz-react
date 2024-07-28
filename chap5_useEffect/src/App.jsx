import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <div>데이터 목록</div>
      {data.map((el) => (
        <div key={el.id}>{el.content}</div>
      ))}
      <AlertTimer />
      <MouseFollower />
      <ScrollIndicator />
      <div style={{ height: "300vh" }}></div>
    </>
  );
}

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      // console.log("mouse move");
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "blue",
          pointerEvents: "none",
          opacity: "0.4",
        }}
      ></div>
    </>
  );
};

const ScrollIndicator = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // 현재 스크롤 내린 길이
      const widthHeight = // 남은 스크롤 길이
        document.documentElement.scrollHeight - // 스크롤의 총 길이
        document.documentElement.clientHeight; // 화면의 스크롤 길이

      // 전체 길이 대비 사용자 스크롤 퍼센티지
      const widthPercentage = (scrollTop / widthHeight) * 100;
      setScrollWidth(widthPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <div
        style={{
          position: "fixed",
          width: `${scrollWidth}%`,
          left: "0",
          top: "0",
          height: "10px",
          backgroundColor: "blue",
        }}
      ></div>
    </>
  );
};

const AlertTimer = () => {
  // 상태 지정
  const [showAlert, setShowAlert] = useState(true);
  console.log("값: ", showAlert);

  // 렌더링될 때
  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      showAlert === true ? alert("시간 초과") : null;
    }, 3000);

    return () => clearInterval(setTimeoutId);
  });

  // 사이드 이펙트 관리

  return <button onClick={() => setShowAlert(false)}>클릭 !</button>;
};

export default App;
