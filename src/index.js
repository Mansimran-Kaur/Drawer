import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import Drawer, { useDrawer } from "./Drawer";
import "./styles.css";

function App() {
  const { open, handleOpen, handleClose } = useDrawer();

  return (
    <div className="App">
      <button type="button" onClick={handleOpen}>
        Open Drawer
      </button>
      {open && (
        <Drawer handleClose={handleClose} title="Back" direction="left">
          <h2>Drawer heading</h2>
          <p>Drawer Content</p>
        </Drawer>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
