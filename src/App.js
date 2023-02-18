import React, { useState } from "react";
import "./App.css";
import LineChart from "./customChart/LineChart";

function App() {
  const [data, setData] = useState(
    Array.from({ length: 100 }, () => Math.round(Math.random() * 100))
  );

  return <LineChart data={data} />;
}

export default App;
