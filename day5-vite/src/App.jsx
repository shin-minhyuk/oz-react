import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        {/* <Link to="/main">메인 </Link>
        <Link to="/mypage">마이페이지 </Link>
        <Link to="/test">테스트 </Link> */}
        <button
          onClick={() => {
            navigate("/main");
          }}
        >
          메인
        </button>
        <button onClick={() => navigate("/mypage")}>마이페이지</button>
        <button onClick={() => navigate("/test")}>테스트</button>
      </div>
      <div>
        <button onClick={() => navigate(-1)}>{`<- 뒤로가기`}</button>
        <button onClick={() => navigate(1)}>{`앞으로 가기 ->`}</button>
      </div>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<div>마이 페이지</div>} />
        <Route path="/test" element={<div>테스트 페이지</div>} />
      </Routes>
    </>
  );
}

function Main() {
  const params = useParams();
  // console.log(params.name);

  const location = useLocation();
  console.log(location.search);

  const [serachParams, setSearchParams] = useSearchParams();
  console.log(serachParams.get("search"));
  console.log(serachParams.get("school"));

  return <div>메인 페이지</div>;
}

export default App;
