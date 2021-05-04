import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Account, Footer, Cash, About, Portfolio } from "./";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/portfolio" exact component={() => <Portfolio/>}/>
          <Route path="/cash" exact component={() => <Cash/>}/>
          <Route path="/account" exact component={() => <Account/>}/>
          <Route path="/about" exact component={() => <About/>}/>
        </Switch>
      </Router>
      <Footer/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;




