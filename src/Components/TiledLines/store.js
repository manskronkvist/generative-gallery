import { observable, decorate } from "mobx";

class TiledLinesStore {
  width = 500;
  height = 500;
  linehue = 100;
  linesat = 50;
  linelight = 50;
  steps = 30;
}

const store = new TiledLinesStore();

decorate(store, {
  width: observable,
  height: observable,
  linehue: observable,
  linesat: observable,
  linelight: observable,
  steps: observable,
});

export default store;
