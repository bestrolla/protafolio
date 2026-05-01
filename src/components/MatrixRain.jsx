import React, { useRef, useEffect } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.font = '15pt monospace';

    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;

    const columns = [];
    for (let i = 0; i < 256; columns[i++] = 1);

    const step = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      columns.map((value, index) => {
        const character = String.fromCharCode(0x21 + Math.random() * 94);
        ctx.fillText(character, index * 10, value);

        columns[index] = value > 758 + Math.random() * 1e4 ? 0 : value + 10;
      });
    };

    const interval = setInterval(step, 33);

    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />;
};

export default MatrixRain;