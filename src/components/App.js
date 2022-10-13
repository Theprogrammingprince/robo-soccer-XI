import React, {Component} from "react";
import { connect } from "react-redux";
import CardList from "../containers/CardList";
import SearchBox from "../SearchBox.js"
import Scroll from "../containers/Scroll"
// import { Players } from "./Players";
import './App.css'
import {setSearchField, requestPlayers} from '../Action'
// import { requestPlayers } from "../reducers";

const mapStateToProps = state =>{
    return{
        searchField: state.searchPlayers.searchField,
        players: state.requestPlayers.players,
        isPending: state.requestPlayers.isPending,
        error: state.requestPlayers.error
    }
}

const mapDispatchToProps = (dispatch) =>{
   return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestPlayers: () => dispatch(requestPlayers())
   }
}

class App extends Component {

    componentDidMount(){
        this.props.onRequestPlayers();
    }

    

    render(){
        const {searchField, onSearchChange, players, isPending} = this.props
        const filteredPlayers = players.filter(Player =>{
        return Player.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending ?
        <h1>Loading...</h1> :
        
        (
            <div className="tc">
              <h1 className="f1">My Europe XI</h1>
              <SearchBox searchChange={onSearchChange}/>
              <Scroll>
              <CardList Players={filteredPlayers}/>
             </Scroll>
            </div>
             )
        }
    }



export default connect(mapStateToProps, mapDispatchToProps)(App);