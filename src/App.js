import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  shuffleArray = (array) => {
    let FriendArray = friends;
    for (let i = FriendArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [FriendArray[i], FriendArray[j]] = [FriendArray[j], FriendArray[i]];
    }
    return FriendArray
  };

  pickImg = (name) => {
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct! Keep going!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect! Try again!",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {

    }
  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Title />
        {this.shuffleArray(friends).map(friend => (
            <FriendCard src={this.imgSwitch(friend.image)} image={friend.image} name={friend.name} key={friend.id} pickImg={this.pickImg}  />
          ))}
      </Wrapper>
    );
  }
}

export default App;
