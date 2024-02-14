import React from "react";

import "./Main.scss";
import Card from "../Cards/Card";
import { handleSort } from"../../utils/sortUtils"
function Main({ setCardData, data, setData }) {
  const handleSortData = (direction)=>{
    const sortdata=handleSort(data, direction)
    setData(sortdata)
  }
    
  };
  return (
    <main className="main-container">
      <div className="main-action-btn">
        <button
          onClick={() => {
            handleSort(data,"az");
          }}
        >
          Sort A-Z
        </button>
        <button onClick={handleSort(data)}> Sort z-A</button>
      </div>
      {data.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          setCardData={setCardData}
        />
      ))}
    </main>
  );
}

export default Main;
