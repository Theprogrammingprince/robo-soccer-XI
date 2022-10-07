import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox.js"
import { Players } from "./Players";
import './App.css'



class App extends Component {
    constructor(){
        super()
        this.state = {
            Players: Players,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }

    render(){
        const filteredPlayers = this.state.Players.filter(Players =>{
        return Players.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className="tc">
              <h1 className="f1">My Europe XI</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <CardList Players={filteredPlayers}/>
            </div>
    
        )
    }

}


export default App;