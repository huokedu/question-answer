import React, { Component } from 'react';
//import logo from './logo.svg';
// import './App.css';
import Logo from './components/logo';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Nav from './components/nav';
import Bar from './components/bar';
import Topbar from './components/topbar';
//import axios from 'axios';

class App extends Component {
  constructor() {
        super();
        // const url = `${ROOT_URL}&q=${city},us`;
        // const request = axios.get(url);
        this.state = {
            ques_data: {
              id: 1,
              sub_id: 1,
              chap_id: 1,
              std: 11,
              ques_exp: 'What is your name??',
              ques_ans1: 'Rohan',
              ques_ans2: 'Sohan',
              ques_ans3: 'Mohan',
              ques_ans4: 'Shubham',
              ques_ans: 'a',
              ques_sol: 'This is the solution of the problem',
              ques_level: 'Easy',
              ques_imp: true,
              ques_cat: 'allques',
              user_email: 'shubhambansal17@hotmail.com',
              ques_input: null,
              correct_status: null,
              chap_name: "Physical World",
            }
        };
        this.handleClick = this.handleClick.bind(this);
        this.checkanswer = this.checkanswer.bind(this);

    }
    handleClick(index) {
        let self= this;
        var ques_data = self.state.ques_data;
        if(self.state.ques_data.correct_status==null)
        {
          if(index===self.state.ques_data.ques_input)
          {
            ques_data.ques_input = null;
          }
          else
          {
            ques_data.ques_input = index;
          }
        }
        self.setState({ques_data: ques_data});

        console.log(self.state.ques_data.ques_input);
    }
    componentDidUpdate() {
    console.log(this.state);
  }
  checkanswer() {
    let self = this;
    var ques_data = self.state.ques_data;
    //console.log(self);
    if(self.state.ques_data.ques_input===self.state.ques_data.ques_ans)
    {
      
      ques_data.correct_status = true;
      self.setState({ques_data: ques_data});
      return true;
    }
    else
    {
      self.setState({ques_data: ques_data});
      return false;
    }
  }
  render() {
    return (
      <div>
        <Logo />
        <Sidebar />
        <Topbar 
        ques_data={this.state.ques_data} />
        <Content 
        handleClick={this.handleClick}
        ques_data={this.state.ques_data} />
        <Nav />
        <Bar 
        checkanswer={this.checkanswer} ques_data={this.state.ques_data} />
      </div>
    );
  }
}

export default App;
