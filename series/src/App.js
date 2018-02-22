import React, { Component } from 'react';
import SerieList from './components/SerieList.js';
import AddSerie from './components/AddSerie.js';
import './css/App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { series: [] };
    this.AddSerie = this.AddSerie.bind(this);
    this.removeSerie = this.removeSerie.bind(this);
  }

  componentWillMount(){
    axios.get("http://api.tvmaze.com/shows/82/cast")
    .then(res => {
      this.setState({series: [{name: "Game of Thrones", id: "82", actors:res.data}]});
    })
    
  }

  AddSerie(name, id){
    let series = [...this.state.series];
    for (let i = 0; i < series.length; i++){
      if (series[i].id === id) {
        break;
      }
      else if (i === series.length - 1){
        axios.get("http://api.tvmaze.com/shows/" + id + "/cast")
        .then(res => {
          series = [...this.state.series,
          {name: name, id: id, actors:res.data}
          ];
          this.setState({series});
        })
      }
    }
  }

  removeSerie(id){
    const series = [...this.state.series];
    for (let i = 0; i < series.length; i++){
      if (series[i].id === id) {
        series.splice(i, 1);
        break;
      }
    }
    this.setState({series});
  }
  
  render() {
    const { series } = this.state;
    return (
      <div className = "App">
      <AddSerie onNewSerie = {this.AddSerie} />
      <SerieList series = {series} onRemove = {this.removeSerie}/>
      </div>)
  }
}

export default App;