import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = width;
    canvas.style.height = height;
    let arrry = [];
    // const width = 1500;
    // const height = 700;

    for (let i = 0; i < width; i = i + 25) {
      for (let j = 0; j < height; j = j + 25) {
        arrry.push({
          lat: i,
          lng: j,
        });
      }
    }

    console.log(arrry);

    ctx.fillStyle = "#EEF1FF22";
    ctx.shadowColor = "#EEF1FF44";
    ctx.shadowBlur = 8;

    ctx.beginPath();
    let radius = 5;

    for (let a = 0; a < arrry.length; a++) {
      const p = arrry[a],
        x = p.lat,
        y = p.lng;

      ctx.moveTo(x + radius, y);
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
    }
    ctx.stroke();
    // ctx.closePath();
    ctx.fill();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      //   width="100vw"
      //   height="100vh"
      //   style={{ width: "100vw", height: "100vh" }}
      //   {...rest}
    />
  );
};

function CanvasDraw() {
  return <Canvas />;
}

export default CanvasDraw;
