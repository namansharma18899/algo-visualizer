import './App.css'
import Grid from './components/Grid/Grid'
import Navbar from './components/Navbar/Navbar'
import OffcanvasExample from './components/Navbar/OffCampusNavbar'


function App() {


  return (
    <div className="App">
      <OffcanvasExample/>
     <Navbar></Navbar>
     <Grid></Grid>
    </div>
  )
}

export default App
