import React, { Component } from "react";
import { observer } from "mobx-react";
import store from "./store";

const TiledLine = observer(
  class TiledLine extends Component {
    draw(context, canvas) {
      let step = store.steps;

      context.clearRect(0, 0, canvas.width, canvas.height);

      context.lineCap = "square";
      context.lineWidth = 2;

      context.strokeStyle = `hsl(${Math.floor(Math.random() * Math.floor(360))},${Math.floor(Math.random() * Math.floor(100))}%,${Math.floor(Math.random() * Math.floor(100))}%)`
      context.fillStyle = `hsl(${Math.floor(Math.random() * Math.floor(360))},${Math.floor(Math.random() * Math.floor(100))}%,${Math.floor(Math.random() * Math.floor(100))}%)`
      context.fillRect(0, 0, store.width, store.height)

      function paintTiles(context, x, y, width, height) {
        let leftToRight = Math.random() >= 0.5;

        if (leftToRight) {
          context.moveTo(x, y);
          context.lineTo(x + width, y + height);
        } else {
          context.moveTo(x + width, y);
          context.lineTo(x, y + height);
        }

        context.stroke();
      }

      for (let x = 0; x < store.width; x += step) {
        for (let y = 0; y < store.width; y += step) {
          paintTiles(context, x, y, step, step);
        }
      }
    }

    componentDidMount() {
      const canvas = this.refs.canvas;
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.draw(context, canvas);
    }

    componentDidUpdate() {
      const canvas = this.refs.canvas;
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, store.width, store.height);
      this.draw(context, canvas);
    }

    render() {
      return (
        <div>
          <canvas
            ref="canvas"
            width={store.width}
            height={store.height}
          />
        </div>
      );
    }
  }
);

export default TiledLine;
