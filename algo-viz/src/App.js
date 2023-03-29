import logo from './logo.svg';
// import './App.css';
import Grid from './components/GridView';
import MatrixToGrid from './components/Matrix';
import Sidebar from './components/navigation/sidebar' ;
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
          <Sidebar/>
          <MatrixToGrid/>
        </div>
      </Router>
    </div>
  );
}

export default App;
