import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { TeamPage } from './page/TeamPage';
import {MatchPage} from './page/MatchPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/teams/:teamName' element={ <TeamPage/>}/> 
          <Route path='/teams/:teamName/matches/:year' element={ <MatchPage/>}/>           
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
