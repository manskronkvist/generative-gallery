import React, { Component } from "react";
import { observer } from "mobx-react";
import store from "./store";

const JoyDivision = observer(
  class JoyDivision extends Component {
    draw(context) {
      let size = store.width;
      context.lineWidth = store.linewidth;

      let step = store.step;
      let lines = [];

      // Create the lines
      for (let i = step; i <= size - step; i += step) {
        let line = [];
        for (let j = step; j <= size - step; j += step) {
          let distanceToCenter = Math.abs(j - size / 2);
          let letiance = Math.max(size / 2 - store.peakwidth - distanceToCenter, 0);
          let random = ((Math.random() * letiance) / 2) * -store.peakheight;
          let point = { x: j, y: i + random };
          line.push(point);
        }
        lines.push(line);
      }

      // Do the drawing
      for (let i = 5; i < lines.length; i++) {
        context.beginPath();
        context.moveTo(lines[i][0].x, lines[i][0].y);

        for (var g = 0; g < lines[i].length - 2; g++) {
          let xc = (lines[i][g].x + lines[i][g + 1].x) / 2;
          let yc = (lines[i][g].y + lines[i][g + 1].y) / 2;
          context.quadraticCurveTo(lines[i][g].x, lines[i][g].y, xc, yc);
        }

        context.quadraticCurveTo(
          lines[i][g].x,
          lines[i][g].y,
          lines[i][g + 1].x,
          lines[i][g + 1].y
        );
        context.save();
        context.globalCompositeOperation = "destination-out";
        context.fill();
        context.restore();
        context.stroke();
      }
    }

    componentDidMount() {
      const canvas = this.refs.canvas;
      const context = canvas.getContext("2d");
      this.draw(context);
    }

    componentDidUpdate() {
      const canvas = this.refs.canvas;
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.draw(context);
    }

    render() {
      return (
        <div>
          <canvas
            ref="canvas"
            width={store.width}
            height={store.height}
            observables={{ ...store }} //Passing observables as props to force rerendering on updated values
          />
        </div>
      );
    }
  }
);

export default JoyDivision;
