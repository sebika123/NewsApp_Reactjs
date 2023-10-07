
import './App.css';
import React, { Component } from 'react'
import Navbar from'./components/Navbar';
import News from'./components/News';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        {/* prop bata news content ma country pass garne */}
        <News  pageSize={5} country="in" category="general"/>

        </Router>

      </div>
    )
  }
}



