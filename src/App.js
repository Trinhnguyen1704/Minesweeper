import React, { Component } from 'react'
import logo from './logo.svg';

import './App.css';
import { ThemeContext, themes } from "./components/Theme/ThemeContext";
import ThemedButton from "./components/Theme/ThemedButton";
import Menu from './components/Menu';
import MenuApp from './components/MenuApp'
import Board from './components/Board'
import { AppContext, Levels } from './AppContext';

function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRestart: false,
      theme: themes.light,
      level: Levels.MEDIUM
    }
  }

  toggleRestart = () => {
    console.log("ttoggle restart")
    let isRestart = this.state.isRestart;
    this.setState({ isRestart: !isRestart });
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark
        ? themes.light
        : themes.dark
    }))
  }

  selectLevel = (value) => {
    // Value : Levels.MEDIUM ..
    this.setState({isRestart: true,level: Levels[value]});
  }

  render() {
    let { isRestart, level } = this.state;
    return (
      <AppContext.Provider 
      value={{ 
        isRestart: isRestart,
        level: level,
        toggleRestart: this.toggleRestart, 
        }}>
        <div className="App">
          <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme} />
          </ThemeContext.Provider>
          <Menu selectLevel={this.selectLevel}/>
          <MenuApp />
          <div>
            <Board/>
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
