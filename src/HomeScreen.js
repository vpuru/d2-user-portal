import { useEffect, useState } from "react";
import Buttons from "./Components/Buttons";
import Interface from "./Components/Interface";
import "./App.css";
import "./Components/tailwind.css";

require("dotenv").config();

const axios = require("axios");

function App() {
  const [masterData, setMasterData] = useState({ data: [] });
  const [filter, setFilter] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    // get data using api
    axios.get("yourapilink.com").then((data) => {
      setCount(count + 1);
      console.log(data.data);
      console.log(count);
      setMasterData(data.data);
    });
    require("dotenv").config();
    // setMasterData(data);
  }, []);

  return (
    <div>
      <Buttons filter={filter} setFilter={setFilter} />
      <Interface count={count} filter={filter} masterData={masterData.data} />
    </div>
  );
}

export default App;
