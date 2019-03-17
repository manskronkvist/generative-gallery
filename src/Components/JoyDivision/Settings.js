import React, { Component } from "react";
import "./Settings.css";
import store from "./store";

class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <label htmlFor="linewidth">Line Thickness: </label>
        <input
          type="range"
          name="linewidth"
          id="linewidth"
          defaultValue={1}
          min={1}
          max={10}
          onChange={e => store.handleLineChange(e)}
        />
        <label htmlFor="peakwidth">Peak Width: </label>
        <input
          type="range"
          name="peakwidth"
          id="peakwidth"
          min={0}
          max={300}
          defaultValue={50}
          onChange={e => store.handlePeakChange(e)}
        />
        <label htmlFor="peakheight">Peak Height: </label>
        <input
          type="range"
          name="peakheight"
          id="peakheight"
          defaultValue="1.0"
          step={0.1}
          min={0}
          max={2.0}
          onChange={e => store.handlePeakHeightChange(e)}
        />
      </div>
    );
  }
}

export default Settings;
