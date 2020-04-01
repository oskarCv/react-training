import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[{
        name:'Frank',
        id:'mF'
      },{
        name: 'Dracula',
        id:'mD'
      },{
        name:'Mummy',
        id:'mM'
      },{
        name:'Wolf',
        id:'mW'
      }
    ]};
  }
  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster)=>(
            <h1>{monster.name}</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
