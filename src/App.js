import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
      <Switch>
                      <Route path="/">
                        <Home/>
                      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
