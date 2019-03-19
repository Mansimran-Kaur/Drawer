import React, { Component } from "react";
import ReactDOM from "react-dom";
import Drawer from "./Drawer.js";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({
      open: true
    });
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
    const { open } = this.state;
    return (
      <div className="App">
        <button type="button" onClick={this.handleOpen}>
          Open Drawer
        </button>
        {open && (
          <Drawer handleClose={this.handleClose} title="Back" direction="left">
            <h2>Drawer heading</h2>
            <p>Drawer Content</p>
          </Drawer>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
