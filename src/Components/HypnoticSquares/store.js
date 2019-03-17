import { observable, decorate } from "mobx";

class HypnoticSquareStore {
  width = 500;
  height = 500;
  finalsize = 3;
  linethickness = 2;
  squaredensity = 10;
  startSteps = 3;
  handlefinalsize = (e) => {
    this.finalsize = e.target.value;
  }
  handlelinethickness = (e) => {
    this.linethickness = e.target.value;
  }
  handleDensity = (e) => {
    this.squaredensity = e.target.value;
  }
  handleStartsteps = (e) => {
    this.startSteps = e.target.value;
  }
}

const store = new HypnoticSquareStore();

decorate(store, {
  width: observable,
  height: observable,
  finalsize: observable,
  linethickness: observable,
  squaredensity: observable,
  startSteps: observable,
});

export default store;
