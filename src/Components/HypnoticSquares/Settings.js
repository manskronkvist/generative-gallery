import React, { Component } from "react";
import './Settings.css'
import store from "./store";

class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <label htmlFor="density">No of squares: </label>
        <input
          type="range"
          name="density"
          id="density"
          defaultValue={10}
          min={1}
          max={30}
          onChange={e => store.handleDensity(e)}
        />
        <label htmlFor="startsteps">Square Density: </label>
        <input
          type="range"
          name="startsteps"
          id="startsteps"
          defaultValue={3}
          min={3}
          max={30}
          onChange={e => store.handleStartsteps(e)}
        />
        <label htmlFor="linethick">Line thickness: </label>
        <input
          type="range"
          name="linethick"
          id="linethick"
          defaultValue={2}
          min={0}
          max={10}
          step={0.1}
          onChange={e => store.handlelinethickness(e)}
        />
        <label htmlFor="finalsize">Center square Size: </label>
        <input
          type="range"
          name="finalsize"
          id="finalsize"
          defaultValue={1}
          min={1}
          max={10}
          onChange={e => store.handlefinalsize(e)}
        />
      </div>
    );
  }
}

export default Settings;