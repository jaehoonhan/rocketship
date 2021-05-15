<<<<<<< HEAD
import Stock from './Stock'
//import Stocklist from'./Stocklist'
import './App.css';
import {Menuitems} from "./Menuitems"
import Search from './Search';
//import Topmovers from './Topmovers'
=======
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Account, Footer, Cash, About, Portfolio, Home } from "./";
>>>>>>> dca244032b030fd346bf00d3008de5ffe743f4b1

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
         
         <div>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Rocketship</h1>
          <Search>
          </Search>
          <ul className="nav-menu">
            {Menuitems.map((item,index) => {
              return(
                <li key={index}>
                  <a className={item.cNane} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
            
          </ul>
        </nav>
      </div>
        <Stock >
        
        </Stock> 
      <div>

      </div>
=======
      <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={() => <Home/>}/>
          <Route path="/portfolio" exact component={() => <Portfolio/>}/>
          <Route path="/cash" exact component={() => <Cash/>}/>
          <Route path="/account" exact component={() => <Account/>}/>
          <Route path="/about" exact component={() => <About/>}/>
        </Switch>
      </Router>
      <Footer/>
      <header className="App-header">
      </header>
>>>>>>> dca244032b030fd346bf00d3008de5ffe743f4b1
    </div>
  );
}

export default App;
