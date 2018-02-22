import React, { Component } from 'react';
import Actorlist from './components/ActorList.js';
import AddActor from './components/AddActor.js';
import './css/App.css';

const actors = [
{
  id:1,
  name:"Emilia Clarke",
  character:"Daenerys Targaryen",
  photo:"https://images-na.ssl-images-amazon.com/images/M/MV5BNjg3OTg4MDczMl5BMl5BanBnXkFtZTgwODc0NzUwNjE@._V1_UX214_CR0,0,214,317_AL_.jpg"
},
{
  id:2,
  name:"Kit Harington",
  character:"Jon Snow",
  photo:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTA2NTI0NjYxMTBeQTJeQWpwZ15BbWU3MDIxMjgyNzY@._V1_UX214_CR0,0,214,317_AL_.jpg"
},
{
  id:3,
  name:"Peter Dinklage",
  character:"Tyrion Lannister",
  photo:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1MTI5Mzc0MF5BMl5BanBnXkFtZTYwNzgzOTQz._V1_UY317_CR20,0,214,317_AL_.jpg"
}
];

let id = actors.length + 1;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { actors };
    this.AddActor = this.AddActor.bind(this);
    this.removeActor = this.removeActor.bind(this);
  }
  
  AddActor(name, character, photo){
    const actors = [
      ...this.state.actors,
      {id, name, character, photo}
    ];
    this.id++;
    this.setState({actors});
  }

  removeActor(id){
    const actors = [...this.state.actors];
    for (let i = 0; i < this.state.actors.length; i++){
      if (actors[i].id === id) {
        actors.splice(i, 1);
        break;
      }
    }
    this.setState({actors});
  }
  
  render() {
    const { actors } = this.state
    return (
      <div className = "App">
      <AddActor onNewActor = {this.AddActor} />
      <Actorlist actors = {actors} onRemove = {this.removeActor}/>
      </div>)
  }
}

export default App;