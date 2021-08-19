import Navbar from "./Components/Navbar";
import Map from "./Components/Map";
import Dashboard from "./Components/Card";
import data from "./locations";
import "./App.css";
import "./Components/tailwind.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="py-10 m-auto max-w-7xl p-4 flex justify-between space-x-4">
        <Map data={data} />
        <Dashboard data={data} />
      </div>
    </div>
  );
}

export default App;
