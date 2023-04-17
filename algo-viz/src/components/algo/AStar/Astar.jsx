import React from 'react';
import { useState, useEffect } from 'react';
import NavScrollExample from './navbar';
import Container from 'react-bootstrap/Container';
// import './matrix.css';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';


const Rows = 10;
const Cols = 80;

function Astar() {

  const [foundFlag, setFoundFlag] = useState(false);
  const [visited, setVisited] = useState(null);
  const [addblock, setAddblock] = useState(false)
  const [blockers, setBlockers] = useState([])
  const [flag, setFlag] = useState({
    'curr': 'start'
  })
  const [waypoints, setWaypoints] = useState({
    start: null,
    end: null,
  });

  const [cellColors, setCellColors] = useState(() => {
    var temp = new Array(Rows);
    for (var i = 0; i < Rows; i++) {
      temp[i] = new Array(Cols).fill('white');
    }
    return temp;
  });

  function resetBoard() {
    window.location.reload()
  }

  function FillCurrElement(index, color) {
    if (index[0] == waypoints.start[0] && index[1] == waypoints.start[1]) {
      return true
    }
    const newCellColors = { ...cellColors };
    newCellColors[index[0]][index[1]] = color;
    setCellColors(newCellColors);
  }

  function CheckValidGridIndex(sourcex, sourcey) {
    if (sourcex < 0 || sourcex > (Rows - 1) || sourcey < 0 || sourcey > (Cols - 1)) {
      return false;
    }
    return true;
  }

  function SetF(val) {
    setFoundFlag(val)
  }

  useEffect(() => {
    if (foundFlag == true) {
      FillCurrElement([waypoints.end[0], waypoints.end[1]], 'gold')
      alert('Foud Element')
    }
  }, [foundFlag])

  function VisualizePath(sourcex, sourcey, destinationx, destinationy) {
    if (CheckValidGridIndex(sourcex, sourcey) && visited[sourcex][sourcey] == "false") {
      if (foundFlag == true || (sourcex < 0 || sourcex > (Rows - 1) || sourcey < 0 || sourcey > (Cols - 1)) || ((blockers.find(el => el[0] == sourcex && el[1] == sourcey) != undefined ? true : false) == true)) {
        return false
      }// Can't figure this out on my own.....Need some rect recursion export
      if (sourcex == destinationx && sourcey == destinationy) {
        console.log('Waiting for setFoundFlag', foundFlag)
        SetF(true)
        console.log('setFoundFlag -> ' + foundFlag)
        FillCurrElement([sourcex, sourcey], 'gold')
        return true
      }
      var temp = [...visited]
      temp[sourcex][sourcey] = "true"
      setVisited(temp)
      setTimeout(() => {
        if (foundFlag == true) {
          return null;
        }
        //TODO: NEED TO PUT THESE FUNCTIONS AS PART OF CALLBACK IN setStateVar
        FillCurrElement([sourcex, sourcey], 'blue')
        VisualizePath(sourcex + 1, sourcey, destinationx, destinationy)
        VisualizePath(sourcex - 1, sourcey, destinationx, destinationy)
        VisualizePath(sourcex, sourcey + 1, destinationx, destinationy)
        VisualizePath(sourcex, sourcey - 1, destinationx, destinationy)
      }, 10);
    }
  }

  useEffect(() => {
    var tempColors = {};
    var visited = new Array(Rows);
    for (var i = 0; i < Rows; i++) {
      visited[i] = new Array(Cols).fill('false');
    }
    setVisited(visited);
  }, []);


  const gridStyle = {
    display: 'grid',
    placeContent: 'center',
    height: '99.9%',
    width: '100%',
    gridTemplateColumns: 'repeat($Cols, 20px)'.replace('$Cols', Cols),
    gridTemplateRows: 'repeat($Rows, 10px)'.replace('$ Rows', Rows),
    gap: '1px',
    border: '1px solid black',
    backgroundColor: 'black'
  };

  const handleCellClick = (index) => {
    const newCellColors = { ...cellColors };
    const newFlag = {};
    let newColor = null;
    if (addblock == false) {
      newColor = flag["curr"] === "start" ? "green" : "red";
      newFlag["curr"] = flag["curr"] === "start" ? "end" : "start";
      setFlag(newFlag);
      let tempWaypoints = waypoints;
      if (tempWaypoints[flag['curr']] != null) {
        newCellColors[tempWaypoints[flag["curr"]][0]][tempWaypoints[flag["curr"]][1]] = 'white'
      }
      tempWaypoints[flag["curr"]] = index;
      setWaypoints(tempWaypoints);
    } else {
      newColor = 'brown';
      const updatedBlockers = [...blockers]
      updatedBlockers.push(index)
      setBlockers(updatedBlockers)
    }
    console.log('index -> ' + index)
    console.log(newCellColors[index[0]][index[1]])
    newCellColors[index[0]][index[1]] = newColor;
    setCellColors(newCellColors);
  };

  function AddBlockers() {
    setAddblock(((addblock == true) ? false : true));
  }

  function GetCellColor(row, col) {
    var val = "".concat(row).concat(",").concat(col);
    var res = "".concat(cellColors[val]);
    if (res === undefined) {
      return "grey";
    } else {
      return res;
    }
  }


  function visualizePath() {
    // TODO: visluze path
    console.log(waypoints)
    console.log(visited)
    console.log(cellColors)
    console.log(blockers)
    VisualizePath(waypoints['start'][0], waypoints['start'][1], waypoints['end'][0], waypoints['end'][1])
  }

  function Game() {
    var matrix = new Array(Rows);

    for (var i = 0; i < Rows; i++) {
      matrix[i] = new Array(Cols).fill(undefined);
    }

    return (
      <div style={{ display: 'flex', width: '100%', height: '100vh',overflow: 'scroll initial', backgroundColor: 'grey' }}>
        <div style={gridStyle}>
          {matrix.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                onClick={() => handleCellClick([rowIndex, colIndex])}
                key={`${rowIndex}-${colIndex}`}
                style={{
                  background: cellColors[rowIndex][colIndex],//'#2E3460'
                  color: '#D8DEE9',
                  height: '60px',
                  // width: '60px',
                  fontWeight: 'bold',
                  border: '1px solid black',
                  boxSizing: 'border-box',
                }}>
              </div>
            ))
          )}
        </div>
      </div>
    )
  }

  return (
    <Container fluid>
      <NavScrollExample resetBoard={resetBoard} visualizePath={visualizePath} AddBlockers={AddBlockers} />
      <Game />
      {/* // <AnotherGame/> */}
    </Container>
  );
};

export default Astar;
