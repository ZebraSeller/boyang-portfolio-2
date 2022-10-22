
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Routes} from 'react-router-dom';
/** Importing custom comps */
import Nav_Bar from './general_comps/nav_bar';
import Footer from './general_comps/footer';
/** Importing pages */
import Home from "./page_comps/home";
import Resume from "./page_comps/resume";
import Portfolio from "./page_comps/portfolio";
import PageNotFound from "./page_comps/page_not_found";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Nav_Bar />
        {/* <Home/> */}
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/resume" element={<Resume />}/>
          {/* <Route path="/boyang-portfolio-2/contact_me" exact component={ContactMe}/> */}
          <Route path="*" element={<PageNotFound />}/>
          <Route element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
