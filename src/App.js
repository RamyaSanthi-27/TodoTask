import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import InputBox from "./InputBox";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>My Todo</h1>
          <InputBox />
        </div>
      </div>
    </div>
  );
}

export default App;
