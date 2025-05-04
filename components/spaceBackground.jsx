"use client";
import { useEffect, useRef } from 'react';

const SpaceBackground = ({
  className = "",
  gradientOpacity = false, // Add prop for enabling gradient opacity
  gradientStartY = 0.05, // Add prop for gradient start Y position (fraction of height)
  amount = 2500, // Number of stars
  gradientMultiplier = 1.7, // Multiplier for gradient opacity effect
}) => {
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
        // this.velocity = 0;
      }

      update() {
        this.x += this.velocity;
        if (this.x > this.canvasWidth + 2) {
          this.reset();
          this.x = -2;
        }
      }

      draw() {
        let opacity = 1;
        if (gradientOpacity) {
          const startY = this.canvasHeight * gradientStartY;
          if (this.y > startY) {
            // Calculate opacity: starts from 1 at startY, reaches 0 at canvasHeight
            opacity = (this.canvasHeight - this.y) / (this.canvasHeight - startY);
            opacity = Math.min(1, Math.max(0, opacity*gradientMultiplier)); // Clamp between 0 and 1
          } else {
            opacity = 1; // Fully opaque above or at the start line
          }
        }

        if (opacity <= 0) return; // Don't draw if fully transparent

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`; // Use rgba for opacity
        ctx.fillStyle = `rgba(156, 163, 175, ${opacity})`; // Tailwind gray-700 with variable opacity
        // ctx.fillStyle = `rgba(192, 132, 252, ${opacity})`; // Tailwind gray-700 with variable opacity
        
        ctx.fill();
      }
    }

    let stars = [];
    let animationFrameId;

    const resizeCanvas = () => {
      // Adjust canvas size based on the container div's dimensions
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        // Pass canvas dimensions to Star constructor
        stars = Array(amount)
          .fill()
          .map(() => new Star(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      if (!canvas || !ctx) return; // Ensure canvas and context are available
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.update();
        star.draw(); // Draw method now handles opacity
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initial setup
    resizeCanvas(); // Call resize initially to set correct dimensions
    animate();

    // Event listeners
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
    // Add gradientOpacity and gradientStartY to dependency array if they should trigger re-initialization on change
    // However, for this effect, running once on mount is usually sufficient.
  }, [gradientOpacity, gradientStartY]); // Add props to dependency array

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none w-full h-full" // Canvas takes full size of its container
      />
    </div>
  );
};

export default SpaceBackground;