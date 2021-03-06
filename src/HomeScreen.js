import { useEffect, useState } from "react";
import Interface from "./Components/Interface";
import "./App.css";
import "./Components/tailwind.css";

require("dotenv").config();

const axios = require("axios");

function App() {
  const [masterData, setMasterData] = useState({ data: [] });
  const [count, setCount] = useState(0);

  useEffect(() => {
    // get data using api
    axios
      .get("api link here")
      .then((data) => {
        setCount(count + 1);
        console.log(data.data);
        console.log(count);
        setMasterData(data.data);
      });

    console.log(masterData);
  }, []);

  return (
    <div>
      <Interface count={count} masterData={masterData.data} />
    </div>
  );
}

export default App;
