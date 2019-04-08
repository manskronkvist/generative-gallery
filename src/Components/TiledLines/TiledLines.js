import React, { useEffect } from "react";

const TiledLine = () => {
  let canvas;

  function draw(context, canvas) {
    let step = 40;

    canvas.width = canvas.width; // clears ALL canvas state

    context.lineCap = "square";
    context.lineWidth = 2;

    context.strokeStyle = `
      hsl(
        ${Math.floor(Math.random() * Math.floor(360))},
        ${Math.floor(Math.random() * Math.floor(100))}%,
        ${Math.floor(Math.random() * Math.floor(100))}%
      )`;

    context.fillStyle = `
      hsl(
        ${Math.floor(Math.random() * Math.floor(360))},
        ${Math.floor(Math.random() * Math.floor(100))}%,
        ${Math.floor(Math.random() * Math.floor(100))}%
      )`;

    context.fillRect(0, 0, canvas.width, canvas.height);

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

    for (let x = 0; x < canvas.width; x += step) {
      for (let y = 0; y < canvas.width; y += step) {
        paintTiles(context, x, y, step, step);
      }
    }
  }

  useEffect(() => {
    const context = canvas.getContext("2d");
    draw(context, canvas);
  });

  return (
    <div onClick={() => draw(canvas.getContext("2d"), canvas)}>
      <canvas ref={el => (canvas = el)} width={500} height={500} />
    </div>
  );
};

export default TiledLine;
