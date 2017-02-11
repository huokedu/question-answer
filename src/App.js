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
            option: null,
            correct_option: 'a',
            correct_status: null,

        };
        this.handleClick = this.handleClick.bind(this);
        this.checkanswer = this.checkanswer.bind(this);
    }
    handleClick(index) {
        let self= this;
        if(self.state.correct_status==null)
        {
          if(index===self.state.option)
          {
            self.setState({
              option: null
            });
          }
          else
          {
            self.setState({
                option: index
            });
          }
        }

        console.log(self.state.option);
    }
    componentDidUpdate() {
    console.log(this.state);
  }
  checkanswer() {
    let self = this;
    //console.log(self);
    if(self.state.option===self.state.correct_option)
    {
      
      self.setState({
        correct_status: true
      });
      return true;
    }
    else
    {
      
      self.setState({
        correct_status: false
      });
      return false;
    }
  }
  render() {
    return (
      <div>
        <Logo />
        <Sidebar />
        <Topbar />
        <Content 
        handleClick={this.handleClick} option={this.state.option} correct_status={this.state.correct_status} />
        <Nav />
        <Bar 
        checkanswer={this.checkanswer} option={this.state.option} correct_status={this.state.correct_status} />
      </div>
    );
  }
}

export default App;
