import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './components.css';


class Menu extends Component {

  constructor(props){
    super(props);
    this.redirHome = this.redirHome.bind(this);
    this.redirAboutMe = this.redirAboutMe.bind(this);
    this.redirContact = this.redirContact.bind(this);
    this.redirResume = this.redirResume.bind(this);
    this.state = {};
  }

  redirHome() {

  }

  redirAboutMe() {

  }

  redirContact() {

  }

  redirResume() {

  }


  render(){
    return(
        <div>
          <button class= "button" onClick={this.redirHome}>Home</button>
          <button class= "button" onClick={this.redirAboutMe}>About Me</button>
          <button class= "button" onClick={this.redirContact}>Contact</button>
          <button class= "button" onClick={this.redirResume}>Resume</button>
        </div>
      );
    }
}



export default Menu;
