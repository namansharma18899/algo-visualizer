import React from 'react';
import './grid.css';
import { useState } from 'react';

function Grid() {
  const matrix = useState([[]])
  const cells = useState(100)// we'll keep it multiple of 10
  const [graph, setGraph]= useState({
    'waypoints':{
      'start':null,
      'end':null
    }
  })
  const [cellColors, setCellColors] = useState(Array.from({ length: 100 }, () => 'yellow'));
  const [flag, setFlag] = useState({
    'curr':'start'
  })


  const cellStyle = {
    width: '40px',
    height: '40px',
    border: '1px solid black',
    boxSizing: 'border-box',
    // backgroundColor:'greenyellow',
  };

  const gridStyle = {
    display: 'grid',
    placeContent: 'center',
    height: '100vh',
    gridTemplateColumns: 'repeat(10, 40px)',
    gridTemplateRows: 'repeat(10, 40px)',
    gap: '1px',
    border: '1px solid black',
    backgroundColor: 'black'
  };

  const handleCellClick = (index) => {
    const newCellColors = [...cellColors];
    let newColor = flag['curr']=='start'? 'green' : 'red';
    let tempGraph = graph;
    newCellColors[index] = newColor;
    const newFlag = {};
    tempGraph['waypoints'][flag['curr']] = index
    console.log(tempGraph, flag)
    setGraph(tempGraph)
    newFlag['curr'] = (flag['curr']=='start') ? 'end' : 'start';
    setCellColors(newCellColors);
    setFlag(newFlag)
  };

  function visualizePath(event){
    var graphData = {...graph}
    if (graphData['waypoints']['start']==null || graph['waypoints']['end']==null){
      alert('Set both start and End')
    }
    var temp = "".concat(graphData['waypoints']['start']).concat(graphData['waypoints']['end'])
    // now comes the challenging part
  }


  return (
    <div>
      <button >Startpoint</button>
      <button style={{marginLeft: '50px'}}>FinishPoint</button>
      <button onClick={(event) => visualizePath(event)}  style={{marginLeft: '50px'}}> START </button>
      <div style={gridStyle}>
        {Array.from({ length: 100 }).map((_, index) => (
          <div onClick={() => handleCellClick(index)} key={index} style={{...cellStyle, backgroundColor: cellColors[index]}}></div>
        ))}
    </div>
    </div>
  );
}

export default Grid;