import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './cards/cardui2'

import Activity_delhi from "./cards/Activity_delhi";
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Card/>
      <Route path="/activity_delhi" component={ Activity_delhi }/>
    </div>
  );
}

export default App;
