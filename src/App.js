import React, { Component } from "react";
import "./App.css";
import CubicDisarray from "./Components/CubicDisarray/CubicDisarray";
import TiledLines from "./Components/TiledLines/TiledLines";
import HypnoticSquares from "./Components/HypnoticSquares/HypnoticSquares";
import HypnoticSquareSettings from "./Components/HypnoticSquares/Settings";
import JoyDivision from "./Components/JoyDivision/JoyDivision";
import JoyDivisionSettings from "./Components/JoyDivision/Settings";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="galleryItem">
          <div className="description">
            <h1>
              🆃🅷🅴 <br />
              🅶🅴🅽🅴🆁🅰🆃🅸🆅🅴 <br />
              🅶🅰🅻🅻🅴🆁🆈
            </h1>
            <h1>CP 1919</h1>
            <p>
              <i>Originally named CP 1919</i>, the pulsar was discovered in
              November 1967 by student Jocelyn Bell Burnell and her supervisor
              Antony Hewish at Cambridge University. As the star turns, it emits
              electromagnetic radiation in a beam like a lighthouse, which can
              be picked up by radio telescopes. Each line on the image is an
              individual pulse. They’re not exactly the same each time as
              they’re travelling a long way across the universe and interference
              gets in the way.
            </p>
          </div>
          <JoyDivision />
          <JoyDivisionSettings />
        </div>
        <div className="galleryItem">
          <HypnoticSquareSettings />
          <HypnoticSquares />
          <div className="description">
            <h1>Hypnotic Squares</h1>
            <p>
              Creator: 
              <a
                href="http://dada.compart-bremen.de/item/agent/644"
                target="blank"
              >
                William J. Kolomyjec
              </a>
            </p>
            <p>
              Kolomyjec was one of the first computer artists who, through his
              work, firmly related to and studied the pioneers of computer art.
              He studied at the Michigan State University in East Lansing
              Michigan and, as one of the first, graduated in the subject of
              “Computer Art”.
            </p>
          </div>
        </div>
        <div className="galleryItem">
          <h1>Tiled Lines</h1>
          <TiledLines />
        </div>
        <div className="galleryItem">
          <CubicDisarray />
          <div className="description">
            <h1>CubicDisarray</h1>
            <p>
              Creator:
              <a href="https://en.wikipedia.org/wiki/Georg_Nees" target="blank">
                George Nees
              </a>
            </p>
            <p>
              George Nees was born in 1926 in Nuremberg, where he spent his
              childhood. He showed scientific curiosity and interest in art from
              a young age and among his favorite pastimes were viewing art
              postcards and looking through a microscope.
            </p>
          </div>
        </div>
        {/* <DevTools /> */}
      </div>
    );
  }
}

export default App;
