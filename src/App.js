import Header from "./Component/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home 
      className="w-5/6"
      />
    </div>
  );
}

export default App;
