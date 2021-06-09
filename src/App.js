import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
