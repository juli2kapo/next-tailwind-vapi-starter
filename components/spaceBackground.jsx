"use client";
import { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    class Star {
      constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.reset();
      }

      reset() {
        this.x = Math.random() * this.canvasWidth;
        this.y = Math.random() * this.canvasHeight;
        this.radius = Math.random() * 1.5;
        this.velocity = this.radius * 0.35;
      }

      update() {
        this.x += this.velocity;
        if (this.x > this.canvasWidth + 2) {
          this.reset();
          this.x = -2;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
      }
    }

    let stars = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array(2500)
        .fill()
        .map(() => new Star(canvas.width, canvas.height));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initial setup
    resizeCanvas();
    animate();

    // Event listeners
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden h-[60vh]">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default SpaceBackground;