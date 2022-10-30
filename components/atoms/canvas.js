import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = width;
    canvas.style.height = height;
    let arrry = [];

    const distanceBetweenDots = isMobile ? 10 : 20;

    for (let i = 0; i < width; i = i + distanceBetweenDots) {
      for (let j = 0; j < height; j = j + distanceBetweenDots) {
        arrry.push({
          lat: i,
          lng: j,
        });
      }
    }

    ctx.fillStyle = "#EEF1FF22";
    ctx.shadowColor = "#EEF1FF44";
    ctx.shadowBlur = 8;

    ctx.beginPath();
    let radius = isMobile ? 3 : 5;

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

  return <canvas ref={canvasRef} />;
};

function CanvasDraw() {
  return <Canvas />;
}

export default CanvasDraw;
