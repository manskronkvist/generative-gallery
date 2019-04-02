import React, { Component } from "react";
import { observer } from "mobx-react";
import store from "./store";

const HypnoticSquares = observer(
  class HypnoticSquares extends Component {
    draw(context) {
      let size = store.width;
      context.lineWidth = store.linethickness;

      let startSteps;
      let offset = 2;
      let tileStep = (size - offset * 2) / store.squaredensity;
      let startSize = tileStep;
      let directions = [-1, 0, 1];
      function draw(x, y, width, height, xMovement, yMovement, steps) {
        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();

        if (steps >= 0) {
          let newSize = startSize * (steps / startSteps) + store.finalsize;
          let newX = x + (width - newSize) / 2;
          let newY = y + (height - newSize) / 2;
          newX = newX - ((x - newX) / (steps + 2)) * xMovement;
          newY = newY - ((y - newY) / (steps + 2)) * yMovement;
          draw(newX, newY, newSize, newSize, xMovement, yMovement, steps - 1);
        }
      }

      for (let x = offset; x < size - offset; x += tileStep) {
        for (let y = offset; y < size - offset; y += tileStep) {
          startSteps = 4 + Math.ceil(Math.random() * store.startSteps);
          let xDirection =
            directions[Math.floor(Math.random() * directions.length)];
          let yDirection =
            directions[Math.floor(Math.random() * directions.length)];
          draw(
            x,
            y,
            startSize,
            startSize,
            xDirection,
            yDirection,
            startSteps - 1
          );
        }
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
            observables={{ ...store }}
          />
        </div>
      );
    }
  }
);

export default HypnoticSquares;
