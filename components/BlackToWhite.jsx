import React, { useRef, useEffect } from 'react';

const DripCanvas = ({
  width = 800,
  height = 150,
  dripCount = 25,
  maxDripHeight = 100,
  minDripHeight = 20,
  minDripWidth = 10,
  maxDripWidth = 40,
  color = '#000',
  background = '#fff'
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // fill background
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    // draw drip shape
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(width, 0);
    // go down a bit so the top edge isn't completely flat
    ctx.lineTo(width, height * 0.2);

    // generate drips
    const segment = width / dripCount;
    for (let i = 0; i < dripCount; i++) {
      const w = minDripWidth + Math.random() * (maxDripWidth - minDripWidth);
      const h = minDripHeight + Math.random() * (maxDripHeight - minDripHeight);
      const x = i * segment + (segment - w) * 0.5;
      // draw a rounded-top drip: rectangle + semicircle
      ctx.lineTo(x + w, height * 0.2);
      ctx.lineTo(x + w, height * 0.2 + h - w / 2);
      ctx.arc(
        x + w / 2,
        height * 0.2 + h - w / 2,
        w / 2,
        0,
        Math.PI,
        true
      );
      ctx.lineTo(x, height * 0.2);
      ctx.lineTo(x, height * 0.2);
    }

    ctx.lineTo(0, height * 0.2);
    ctx.closePath();
    ctx.fill();
  }, [
    width,
    height,
    dripCount,
    maxDripHeight,
    minDripHeight,
    maxDripWidth,
    minDripWidth,
    color,
    background
  ]);

  return <canvas ref={canvasRef} style={{ display: 'block' }} />;
};

export default DripCanvas;
