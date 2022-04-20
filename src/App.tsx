import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import store from "./store";
import "./App.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
        <div>
          <Link to="/">Search</Link>
          <Link to="/trending">Trending</Link>
        </div>
        
          <Switch>
            <Route path="/trending">
              <Trending />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}