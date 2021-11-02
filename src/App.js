import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
