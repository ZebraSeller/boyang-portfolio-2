
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
/** Importing custom comps */
import Nav_Bar from './general_comps/nav_bar';
import Footer from './general_comps/footer';
/** Importing pages */
import Home from "./page_comps/home"


function App() {
  return (
    <Router>
      <div className="App">
        <Nav_Bar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/portfolio" exact component={Home}/>
          <Route path="/resume" exact component={Home}/>
          <Route path="/contact_me" exact component={Home}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
