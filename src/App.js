import React, { useState, useEffect } from "react";
import "normalize.css";
import axios from "axios";

import "./styles.css";
import Scorecard from "./Scorecard";

const baseUrl = "https://5f5dec4e8b224700167c53f1.mockapi.io/api/v1";

const App = () => {
  const [scores, setScores] = useState([]);
  const [openCardId, setOpenCardId] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/results`)
      .then(({ data }) => setScores(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="app">
      {scores.map(({ id, home, away, stadium, date }) => (
        <Scorecard
          key={id}
          id={id}
          home={home}
          away={away}
          stadium={stadium}
          date={date}
          isOpen={openCardId === id}
          setOpenCardId={setOpenCardId}
        />
      ))}
    </div>
  );
};
export default App;
