import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Table from "./Contact";
import airplan from './airplan';
class Main extends Component {
  constructor(){
    super();
    this.state = {
      activeButton: 0
    };
  }
  handleChange(number) {
    this.setState({
      activeButton: number
    });
    
  }
  render() {
    return (
      <HashRouter>
      <div className="h1">
      <div className = "circle">
       <img className="User" src="user icon.png" alt="a"/>
      </div>
      {/* <img className="icon-left" src="Ellipse 10.png" alt="a"/> */}
     
    </div> 
    <div  className="h3">
        
        <img className="icon-right" src="logo.png" alt="a"/>
         
        </div>
        <div className="h2">
       <ul className="header">

          
          <li className="text1">
          <NavLink exact to="/"
          className={this.state.activeButton === 0 ? "active" : ""}
          onClick={() => this.handleChange(0)}
        >
         <a href="#home">  טיסות</a></NavLink>
         
          </li>
          <div className={this.state.activeButton === 0 ? "line" : ""} />
            <li className="text2">
            <NavLink exact to="/contact"     
            className={this.state.activeButton === 1 ? "active" : ""}
             onClick={() => this.handleChange(1)}
            >
           <a href="#home">חלפים</a> </NavLink>

            </li>
            <div className={this.state.activeButton === 1 ? "line1" : ""} />
          
           
          </ul>
          </div>
          <div className="content">
          <Route exact path="/" component={Home}/>
            {/* <Route path="/stuff" component={Stuff}/> */}
            <Route path="/contact">
                <div>
                  
                  <Table />
                </div>
              </Route>
            </div>
        </HashRouter>
    );
  }
}
export default Main;