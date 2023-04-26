import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NameInput from "./components/NameInput";
import NameDisplay from "./components/NameDisplay";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>여기가 메인페이지입니다</h1>
      <NameInput />
      <NameDisplay />
    </>
  );
}

export default App;
