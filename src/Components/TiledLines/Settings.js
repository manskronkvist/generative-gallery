import React, { Component } from "react";
import './Settings.css'
import store from "./store";

class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <label htmlFor="linehue">Steps: </label>
        <input
          type="range"
          name="steps"
          id="steps"
          defaultValue={50}
          min={20}
          max={70}
          onChange={e => store.handleSteps(e)}
        />
      </div>
    );
  }
}

export default Settings;