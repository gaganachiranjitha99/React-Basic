import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//u
function App() {
  return (
    <Router>
      <div>
        <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>

                <Route path="/About">
                  <About/>
                </Route>

                <Route path="/Contact">
                  <Contact/>
                </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
