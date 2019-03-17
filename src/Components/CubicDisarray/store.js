import { action, observable, decorate } from "mobx";

class CubicDisarrayStore {
  width = 500;
  height = 500;
  linewidth = 2;
  randomDisplacement = 15;
  rotateMultiplier = 20;
  offset = 10;
  squareSize = 30;

  dpr = window.devicePixelRatio;

  incrementWidth = () => {
    this.width += 10;
  };
  incrementHeight = () => {
    this.height += 10;
  }
  incrementLineWidth = () => {
    this.linewidth += 1;
  }
}

const cbStore = new CubicDisarrayStore();

decorate(cbStore, {
  width: observable,
  height: observable,
  linewidth: observable,
  randomDisplacement: observable,
  rotateMultiplier: observable,
  offset: observable,
  squareSize: observable,
  incrementWidth: action,
  incrementHeight: action,
  incrementLine: action
});

export default cbStore;
