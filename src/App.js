import Navbar from "./Components/Navbar";
import Map from "./Components/Map";
import Dashboard from "./Components/Card";
import Filter from "./Components/Filter";
import data from "./locations";
import "./App.css";
import "./Components/tailwind.css";

function App() {
  return (
    <div>
      <Navbar />
      <Filter />
      <div className="py-4 mx-auto max-w-7xl px-4 flex justify-between space-x-4">
        <Map data={data} />
        <Dashboard data={data} />
      </div>
    </div>
  );
}

export default App;
