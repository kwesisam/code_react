import Navbar from "./Navbar"
import Home from "./Home"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Craate from "./Create";
import BlogDetials from "./BlogDetials";

function App() {

  const title = "Welcome to the new blog";

  return (
    <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Craate />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetials />
              </Route>
            </Switch>
          </div>
          
        </div>
    </Router>
    
  );
}

export default App;
