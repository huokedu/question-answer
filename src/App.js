import React, { Component } from 'react';
//import logo from './logo.svg';
// import './App.css';
import Logo from './components/logo';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Nav from './components/nav';
import Bar from './components/bar';
import Topbar from './components/topbar';


class App extends Component {
  constructor() {
        super();
        this.state = {
            option: 'a'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(index) {
        
        this.setState({
            option: index

        });
        console.log(this.state.option);
    }
    handledClick(index) {
        this.setState({
            option: null

        });
        console.log(this.state.option);
    }
  
  render() {
    return (
      <div>
        <Logo />
        <Sidebar />
        <Topbar />
        <Content 
        handleClick={this.handleClick} handledClick={this.handledClick} option={this.state.option} />
        <Nav />
        <Bar />
      </div>
    );
  }
}

export default App;
