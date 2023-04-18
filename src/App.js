import Navbar from './components/Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFound from './NotFound';
import Footer from './components/Footer';
import Create from './components/Create';
import Update from './components/Update';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/Create'>
              <Create />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/update/:id'>
               <Update />
            </Route>
            <Route path="*">
               <NotFound />
            </Route>
        </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
