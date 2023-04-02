import React from 'react';
import createGraph from './Graph';
import { useState, useEffect } from 'react';
import NavScrollExample from './utils/navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './utils/matrix.css';


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

function MatrixToGrid() {
  const [waypoints, setWaypoints] = useState({
    start: null,
    end: null,
  });
  const [cellColors, setCellColors] = useState(()=>{
    var temp = new Array(10);
    for (var i=0; i<10;i++){
      temp[i]=new Array(10);
    }
    for(var index=0; index<10;index++){
      for(var j=0;j<10;j++){
        temp[index][j]='white'
      }
    }
    return temp;
  });
  const [graph, setGraph] = useState(null);
  const [foundFlag, setFoundFlag] = useState(false);
  const [visited, setVisited] = useState(null);
  const [stack, setStack] = useState([]);

  function TimeOut(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  function FillCurrElement(index,color){
    const newCellColors = { ...cellColors };
    newCellColors[index[0]][index[1]] = color;
    setCellColors(newCellColors);
  }

  function CheckValidGridIndex(sourcex,sourcey){
    if(sourcex<0 || sourcex>9 || sourcey<0 || sourcey>9){
      return false;
    }
    return true;
  }


  function VisualizePath(sourcex,sourcey,destinationx,destinationy) {
    if (CheckValidGridIndex(sourcex,sourcey) && visited[sourcex][sourcey]=="false"){
      console.log('in visua path')
      if(foundFlag==true || (sourcex<0 || sourcex>9 || sourcey<0 || sourcey>9)){
        return false
      }
      if (sourcex==destinationx && sourcey==destinationy){
        FillCurrElement([sourcex,sourcey],'gold')
        setFoundFlag(()=>{
          return true
        })
        alert('Found Flag Hurrah')
        return true
      }
      var temp= [...visited]
      temp[sourcex][sourcey]="true"
      setVisited(temp)
      setTimeout(() => {
        FillCurrElement([sourcex,sourcey],'blue')
        VisualizePath(sourcex+1,sourcey,destinationx,destinationy)
        VisualizePath(sourcex-1,sourcey,destinationx,destinationy)
        VisualizePath(sourcex,sourcey+1,destinationx,destinationy)
        VisualizePath(sourcex,sourcey-1,destinationx,destinationy)
      }, 1000);
    }
  }

  useEffect(() => {
    const tempGraph = createGraph();
    var tempColors = {};
    var visited = new Array(10);
    for (var i=0; i<10;i++){
      visited[i]=new Array(10);
    }
    for (const keys in tempGraph) {
      tempColors[keys] = "#2E3440";

    }
    for(var index=0; index<10;index++){
      for(var j=0;j<10;j++){
        visited[index][j]='false'
      }
    }
    setVisited(visited);
    setGraph(tempGraph);
    // setCellColors(tempColors);
  }, []);


    const [flag, setFlag] = useState({
        'curr': 'start'
    })
    const cellStyle = {
        width: '40px',
        height: '40px',
        border: '1px solid black',
        boxSizing: 'border-box',
    };

    const gridStyle = {
        display: 'grid',
        placeContent: 'center',
        height: '99.9%',
        width:'100%',
        gridTemplateColumns: 'repeat(10, 40px)',
        gridTemplateRows: 'repeat(10, 40px)',
        gap: '1px',
        border: '1px solid black',
        backgroundColor: 'black'
    };

  const handleCellClick = (index) => {
    const newCellColors = { ...cellColors };
    let newColor = flag["curr"] === "start" ? "green" : "red";
    let tempWaypoints = waypoints;
    console.log('index -> '+index)
    console.log(newCellColors[index[0]][index[1]])
    newCellColors[index[0]][index[1]] = newColor;
    const newFlag = {};
    tempWaypoints[flag["curr"]] = index;
    setWaypoints(tempWaypoints);
    newFlag["curr"] = flag["curr"] === "start" ? "end" : "start";
    setCellColors(newCellColors);
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
    function visualizePath() {
        // TODO: visluze path
        console.log(waypoints)
        console.log(visited)
        console.log(cellColors)
        VisualizePath(waypoints['start'][0],waypoints['start'][1],waypoints['end'][0],waypoints['end'][1])
    }


    return (
            <Container fluid>
                <NavScrollExample props={visualizePath}/>
                <div style={{display:'flex',width:'100%',height:'95.5%', backgroundColor:'grey'}}>
                    <div style={gridStyle}> 
                            {matrix.map((row, rowIndex) =>
                                row.map((cell, colIndex) => (
                                    <div
                                    onClick={() => handleCellClick([rowIndex, colIndex])}
                                    key={`${rowIndex}-${colIndex}`}
                                    style={{
                                        background: cellColors[rowIndex][colIndex],//'#2E3460'
                                        color: '#D8DEE9',
                                        height: '40px',
                                        width: '40px',
                                        fontWeight: 'bold',
                                        border: '1px solid black',
                                        boxSizing: 'border-box',
                                    }}
                                    >
                                        {rowIndex}-{colIndex}
                                    </div>
                                ))
                                )}
                        </div> 
                </div>
        </Container>
    );
};

export default MatrixToGrid;
