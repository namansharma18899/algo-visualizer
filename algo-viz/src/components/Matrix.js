import React from "react";
import createGraph from "./Graph";
import { useState, useEffect } from "react";

const matrix = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
];

// const gridStyle = {
//   display: "grid",
//   placeContent: "center",
//   height: "100vh",
//   gridTemplateColumns: "repeat(10, 40px)",
//   gridTemplateRows: "repeat(10, 10px)",
//   gap: "1px",
//   border: "1px solid black",
//   backgroundColor: "black",
// };

function MatrixToGrid() {
  const [waypoints, setWaypoints] = useState({
    start: null,
    end: null,
  });
  const [cellColors, setCellColors] = useState({});
  const [graph, setGraph] = useState(null);

  useEffect(() => {
    const tempGraph = createGraph();
    var tempColors = {};
    for (const keys in tempGraph) {
      tempColors[keys] = "#2E3440";
    }
    setGraph(tempGraph);
    console.log("im heree", tempGraph);
    setCellColors(tempColors);
  }, []);

  const [flag, setFlag] = useState({
    curr: "start",
  });
  //   const cellStyle = {
  //     width: "60px",
  //     height: "60px",
  //     border: "1px solid black",
  //     boxSizing: "border-box",
  //   };

  const gridStyle = {
    display: "grid",
    placeContent: "center",
    height: "100vh",
    width: "100%",
    gridTemplateColumns: "repeat(10, 60px)",
    gridTemplateRows: "repeat(10, 60px)",
    gap: "1px",
    alignItems: "center",
    textAlign: "center",
    border: "1px solid black",
    backgroundColor: "black",

    /* On screens that are 992px or less */
    "@media screen and (max-width: 720px)": {
      display: "none",
      placeContent: "center",
      height: "40vh",
      width: "70%",
      gridTemplateColumns: "repeat(10, 40px)",
      gridTemplateRows: "repeat(10, 40px)",
      gap: "1px",
      alignItems: "center",
      textAlign: "center",
      justifySelf: "baseline",
      border: "1px solid black",
      backgroundColor: "black",
    },

    /* On screens that are 600px or less */
    "@media screen and (max-width: 480px)": {
      display: "grid",
      placeContent: "center",
      height: "40vh",
      width: "20%",
      maxWidth: "20px",
      gridTemplateColumns: "repeat(10, 10px)",
      gridTemplateRows: "repeat(10, 30px)",
      gap: "1px",
      alignItems: "center",
      textAlign: "center",
      justifySelf: "baseline",
      border: "1px solid black",
      backgroundColor: "black",
    },
  };

  const handleCellClick = (index) => {
    const newCellColors = { ...cellColors };
    let newColor = flag["curr"] === "start" ? "green" : "red";
    let tempWaypoints = waypoints;
    newCellColors[index] = newColor;
    const newFlag = {};
    tempWaypoints[flag["curr"]] = index;
    console.log(tempWaypoints, flag);
    setWaypoints(tempWaypoints);
    newFlag["curr"] = flag["curr"] === "start" ? "end" : "start";
    setCellColors(newCellColors);
    console.log("scls -> ");
    console.log(cellColors);
    console.log(newCellColors);
    setFlag(newFlag);
  };

  function GetCellColor(row, col) {
    var val = "".concat(row).concat(",").concat(col);
    var res = "".concat(cellColors[val]);
    if (res === undefined) {
      return "grey";
    } else {
      return res;
    }
  }

  function visualizePath(event) {
    // TODO: visluze path
    console.log(cellColors);
    console.log(graph);
    // var tempWaypoints = { ...waypoints }
    // if (tempWaypoints['start'] == null || tempWaypoints['end'] == null) {
    //     alert('Set both start and End')
    // }
    // var temp = "".concat(tempWaypoints['start']).concat(tempWaypoints['end'])
    // alert(temp)
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "100%",
        backgroundColor: "red",
      }}
    >
      <div>
        {/* TODO: fix flexblox padding, button overflowing the page */}
        <button
          style={{ backgroundColor: "lightblue" }}
          onClick={(event) => visualizePath(event)}
        >
          {" "}
          click me
        </button>
      </div>
      <div style={gridStyle}>
        {matrix.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              className="cells"
              onClick={() => handleCellClick([rowIndex, colIndex])}
              key={`${rowIndex}-${colIndex}`}
              style={{
                background: GetCellColor(rowIndex, colIndex), //'#2E3460'
                display: "flex",
                color: "#D8DEE9",
                height: "60px",
                width: "60px",
                // fontSize: '24px',
                fontWeight: "bold",
                border: "1px solid black",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
              }}
            >
              {rowIndex}-{colIndex}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MatrixToGrid;
