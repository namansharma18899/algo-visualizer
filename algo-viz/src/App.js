// import logo from './logo.svg';
// import './App.css';
// import Grid from './components/GridView';
import Dijkstra from './components/algo/Dijkstra/Dijkstra';
import Sidebar from './components/navigation/sidebar' ;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavbar from './components/navigation/Navbar';
import CollapsibleSidebar from './components/navigation/newSidebar';
import FullscreenGrid from './components/utils/Grid';
import ClickableGrids from './components/algo/Dijkstra/temp';
import Shuffle from './components/algo/DurstenfeldShuffle/Shuffle';
import Astar from './components/algo/AStar/Astar';

function App() {
  return (
    <div>
      <MainNavbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Dijkstra/>}/>
          <Route path="/durstenfieldshuffle" element={<Shuffle/>}/>
          <Route path="/astar" element={<Astar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
