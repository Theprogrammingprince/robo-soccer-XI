import React, {Component} from "react";
import CardList from "../containers/CardList";
import SearchBox from "../SearchBox.js"
import Scroll from "../containers/Scroll"
// import { Players } from "./Players";
import './App.css'



class App extends Component {
    constructor(){
        super()
        this.state = {
            Players: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({Players: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }

    render(){
        const {Players, searchfield} = this.state
        const filteredPlayers = Players.filter(Players =>{
        return Players.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(Players === 0){
            return <h1>Loading...</h1>
        } else {
        return(
            <div className="tc">
              <h1 className="f1">My Europe XI</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
              <CardList Players={filteredPlayers}/>
             </Scroll>
            </div>
             )
        }
    }

}


export default App;