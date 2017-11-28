import React, { Component } from 'react';
// import logo from './temporary/logo.svg';
import './App.css';
import Header from './components/Header/Header'
import ResumePart from './components/ResumePart/ResumePart'

class App extends Component {
    constructor() {
        super();
        this.state = {
            headerTitle:' 陈晓明简历'
        }
    }
  render() {
    return (
      <div className="App">
          <Header headerTitle={this.state.headerTitle}/>
          <ResumePart/>
      </div>
    );
  }
}

export default App;
