import React from 'react';
import createGraph from './Graph';
import { useState, useEffect } from 'react';

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

function MatrixToGrid() {
    const [waypoints, setWaypoints] = useState({
        'start': null,
        'end': null
    })
    const [cellColors,  setCellColors] = useState({})
    const [graph, setGraph] = useState(null)

    useEffect(()=>{
        const tempGraph = createGraph()
        var tempColors = {}
        for(const keys in tempGraph){
            tempColors[keys] = '#2E3440'
        }
        setGraph(tempGraph)
        console.log('im heree')
        setCellColors(tempColors)
    },[])

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
        height: '100vh',
        gridTemplateColumns: 'repeat(10, 40px)',
        gridTemplateRows: 'repeat(10, 40px)',
        gap: '1px',
        border: '1px solid black',
        backgroundColor: 'black'
    };

    const handleCellClick = (index) => {
        const newCellColors = {...cellColors};
        let newColor = (flag['curr'] == 'start') ? 'green' : 'red';
        let tempWaypoints = waypoints;
        newCellColors[index] = newColor;
        const newFlag = {};
        tempWaypoints[flag['curr']] = index
        console.log(tempWaypoints, flag)
        setWaypoints(tempWaypoints)
        newFlag['curr'] = (flag['curr'] == 'start') ? 'end' : 'start';
        setCellColors(newCellColors);
        console.log('scls -> ')
        console.log(cellColors)
        console.log(newCellColors)
        setFlag(newFlag)
    };

    function GetCellColor(row,col){
        var val = "".concat(row).concat(',').concat(col)
        var res = "".concat(cellColors[val])
        if (res==undefined){
            return "grey"
        }else{
        return res
    }
    }

    function visualizePath(event) {
        console.log(cellColors)
        console.log(graph)
        // var tempWaypoints = { ...waypoints }
        // if (tempWaypoints['start'] == null || tempWaypoints['end'] == null) {
        //     alert('Set both start and End')
        // }
        // var temp = "".concat(tempWaypoints['start']).concat(tempWaypoints['end'])
        // alert(temp)
    }

    return (
        <div>
            <button onClick={(event) => visualizePath(event)}> click me</button>
            <div style={gridStyle}>
                {matrix.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <div
                            onClick={() => handleCellClick([rowIndex, colIndex])}
                            key={`${rowIndex}-${colIndex}`}
                            style={{
                                background: GetCellColor(rowIndex,colIndex),//'#2E3440'
                                color: '#D8DEE9',
                                height: '40px',
                                width: '40px',
                                // fontSize: '24px',
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
    );
};

export default MatrixToGrid;
