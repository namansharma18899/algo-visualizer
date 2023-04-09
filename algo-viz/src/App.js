// import logo from './logo.svg';
// import './App.css';
// import Grid from './components/GridView';
import MatrixToGrid from './components/algo/Dijkstra/Dijkstra';
import Sidebar from './components/navigation/sidebar' ;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainNavbar from './components/navigation/Navbar';
import CollapsibleSidebar from './components/navigation/newSidebar';
import FullscreenGrid from './components/utils/Grid';

function App() {
  return (
    <div>
      <MainNavbar/>
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
          {/* <Sidebar/> */}
            <MatrixToGrid/>
        </div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<FullscreenGrid/>}>
          </Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
