// import logo from './logo.svg';
// import './App.css';
// import Grid from './components/GridView';
import MatrixToGrid from './components/algo/Dijkstra/Dijkstra';
import Sidebar from './components/navigation/sidebar' ;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavbar from './components/navigation/Navbar';
import CollapsibleSidebar from './components/navigation/newSidebar';
import FullscreenGrid from './components/utils/Grid';
import ClickableGrids from './components/algo/Dijkstra/temp';
import Shuffle from './components/algo/DurstenfeldShuffle/Shuffle';

function App() {
  return (
    <div>
      <MainNavbar/>
      <Router>
        <Routes>
          <Route path="/" element={<MatrixToGrid/>}/>
          <Route path="/durstenfieldshuffle" element={<Shuffle/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
