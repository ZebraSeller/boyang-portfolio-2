
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
/** Importing custom comps */
import Nav_Bar from './general_comps/nav_bar';
import Footer from './general_comps/footer';
/** Importing pages */
import Home from "./page_comps/home";
import Resume from "./page_comps/resume";
import Portfolio from "./page_comps/portfolio";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav_Bar />
        {/* <Home/> */}
        <Switch>
          <Route path="/boyang-portfolio-2/" exact component={Home}/>
          <Route path="/boyang-portfolio-2/portfolio" exact component={Portfolio}/>
          <Route path="/boyang-portfolio-2/resume" exact component={Resume}/>
          {/* <Route path="/boyang-portfolio-2/contact_me" exact component={ContactMe}/> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
