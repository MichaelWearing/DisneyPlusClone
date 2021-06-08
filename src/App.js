import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Login from "./components/Login/Login"
// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
