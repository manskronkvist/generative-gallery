import { observable, decorate } from "mobx";

class JoyDivisionStore {
  width = 600;
  height = 600;
  step = 20;
  linewidth = 1;
  peakwidth = 50;
  peakheight = 1;
  handlePeakChange = (e) => {
    this.peakwidth = e.target.value;
  }
  handleLineChange = (e) => {
    this.linewidth = e.target.value;
  }
  handlePeakHeightChange = (e) => {
    this.peakheight = e.target.value;
  }
}

const store = new JoyDivisionStore();

decorate(store, {
  width: observable,
  height: observable,
  step: observable,
  linewidth: observable,
  peakwidth: observable,
  peakheight: observable,
});

export default store;
