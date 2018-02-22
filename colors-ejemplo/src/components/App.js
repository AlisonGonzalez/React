import React, { Component } from 'react';
import ColorList from './ColorList.js'
import AddColorForm from './AddColorForm.js'
import '../css/App.css';

class App extends Component {
    constructor( props) {
        super( props)
        this.state = { colors: [] }
        this.addColor = this.addColor.bind(this)
    }

    addColor(title, color) {
        const id = (this.state.colors.length+1);
        const colors = [
            ...this.state.colors,
            {id, title, color}
        ]
        this.setState({colors})
    }

    render() {
        const { colors } = this.state
        return (<div className="app" >
            <AddColorForm onNewColor={this.addColor} />
            <ColorList colors={colors} />
        </div> )
    }
}

export default App;
