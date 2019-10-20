import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import NewRobot from '../components/NewRobot';
import Scroll from '../components/Scroll';
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots : [],
            searchfield: '',
            robotfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    addNewRobot = (event) => {
        var newRobotInput = document.getElementById("userInput").value;
        this.setState({
            robots: this.state.robots.concat({
                name: newRobotInput
            })
        });
    }

    render(){
        const { robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1  onClick={() => this.addNewRobot()}    className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <NewRobot addNewRobot={this.addNewRobot}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;