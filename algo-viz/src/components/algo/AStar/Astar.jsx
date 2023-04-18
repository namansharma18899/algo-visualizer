import React from 'react';
import { useState, useEffect } from 'react';
import NavScrollExample from './navbar';
import Container from 'react-bootstrap/Container';
// import './matrix.css';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import Sketch from './p5test';


const Rows = 10;
const Cols = 80;

function Astar() {


  function Game() {
    return <Sketch/>
  }

  return (
    <Container fluid>
      {/* <NavScrollExample resetBoard={resetBoard} visualizePath={visualizePath} AddBlockers={AddBlockers} /> */}
      <Game />
    </Container>
  );
};

export default Astar;
