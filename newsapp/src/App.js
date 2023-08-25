
import './App.css';
import React, { Component } from 'react'
import Navbar from'./components/Navbar';



import News from'./components/News';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/* prop bata news content ma country pass garne */}
        <News  pageSize={5} country="in" />

        

      </div>
    )
  }
}



