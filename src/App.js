import "./App.css";
import Artists from "./components/Artists";
import Songs from "./components/Songs";

function App() {
  return (
    <div className="App">
      <h1>Music App</h1>
      <Artists />
      <Songs />
    </div>
  );
}

export default App;
