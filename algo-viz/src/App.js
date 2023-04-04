// import logo from './logo.svg';
// import './App.css';
// import Grid from './components/GridView';
import MatrixToGrid from './components/algo/Dijkstra/Dijkstra';
import Sidebar from './components/navigation/sidebar' ;
import { BrowserRouter as Router } from 'react-router-dom';
import Shuffle from './components/algo/DurstenfeldShuffle/Shuffle';


function App() {
  return (
    <div>
      <Router>
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
          <Sidebar/>
            <MatrixToGrid/>
          {/* <Shuffle/> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
