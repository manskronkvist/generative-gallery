import React, { Component } from "react";
import { observer } from "mobx-react";
import store from "./store";
import "./style.css";

const CubicDisarray = observer(
  class CubicDisarray extends Component {
    renderArtwork(context) {
      for (
        let i = store.squareSize;
        i <= store.width - store.squareSize;
        i += store.squareSize
      ) {
        for (
          let j = store.squareSize;
          j <= store.width - store.squareSize;
          j += store.squareSize
        ) {
          let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
          let rotateAmt =
            (((j / store.width) * Math.PI) / 180) *
            plusOrMinus *
            Math.random() *
            store.rotateMultiplier;

          plusOrMinus = Math.random() < 0.5 ? -1 : 1;
          let translateAmt =
            (j / store.width) *
            plusOrMinus *
            Math.random() *
            store.randomDisplacement;

          context.save();
          context.translate(i + translateAmt + store.offset, j + store.offset);
          context.rotate(rotateAmt);
          this.paintSquare(context, store.squareSize, store.squareSize);
          context.restore();
        }
      }
    }

    paintSquare(context, width, height) {
      context.beginPath();
      context.rect(-width / 2, -height / 2, width, height);
      context.stroke();
    }

    componentDidMount() {
      const canvas = this.refs.canvas;
      const context = canvas.getContext("2d");
      context.lineWidth = store.linewidth;
      this.renderArtwork(context);
    }

    componentDidUpdate() {
      const canvas = this.refs.canvas;
      const context = canvas.getContext("2d");
      context.lineWidth = store.linewidth;
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.renderArtwork(context);
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

export default CubicDisarray;
