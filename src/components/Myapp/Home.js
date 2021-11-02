import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import About from './About';
import Index from './Index';
import Login from './Login';
import Navbar from './Navbar';
const Home = () => {
    return (
     <Router>
         <Navbar></Navbar>
         <Switch>
         <Route path="/about">
            <About></About> 
         </Route>
         <Route path="/index">
            <Index></Index>
         </Route>
         <Route path="/login">
            <Login></Login>
         </Route>
         </Switch>
       
     </Router>
    );
};

export default Home;