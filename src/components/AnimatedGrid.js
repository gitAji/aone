"use client";
import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

const AnimatedGrid = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    let animationFrameId;
    let particles = [];
    
    // Config
    const particleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 60 : 120;
    const connectionDistance = 150;
    const mouseConnectionDistance = 250;
    
    // Resize canvas
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resize);
    resize();

    // Mouse interaction
    let mouse = { x: null, y: null, radius: 150 };
    
    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    // Color schema based on theme approximation
    const isDark = document.documentElement.classList.contains("dark") || theme === "dark";
    const particleColor = isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(15, 23, 42, 0.25)";
    const lineColorRaw = isDark ? "255, 255, 255" : "15, 23, 42";

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        
        // Random velocity between -1 and 1
        this.moveX = (Math.random() - 0.5) * 1.5;
        this.moveY = (Math.random() - 0.5) * 1.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        // Simple continuous movement
        this.x += this.moveX;
        this.y += this.moveY;

        // Bounce off edges
        if (this.x >= canvas.width || this.x <= 0) this.moveX = -this.moveX;
        if (this.y >= canvas.height || this.y <= 0) this.moveY = -this.moveY;

        // Mouse interaction (repel)
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = (forceDirectionX * force * this.density);
          let directionY = (forceDirectionY * force * this.density);

          if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
          }
        }
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            let opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(${lineColorRaw}, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }

        // Draw lines from mouse to particles
        if (mouse.x != null && mouse.y != null) {
          let dx = particles[a].x - mouse.x;
          let dy = particles[a].y - mouse.y;
          let mouseDist = Math.sqrt(dx * dx + dy * dy);

          if (mouseDist < mouseConnectionDistance) {
            let opacity = 1 - (mouseDist / mouseConnectionDistance);
            ctx.strokeStyle = `rgba(244, 63, 94, ${opacity * 0.4})`; // Rose 500 equivalent color for mouse bonds
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = particleColor;
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  // Using a blend of absolute positioning and overflow hidden
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto overflow-hidden opacity-50 dark:opacity-40">
      <canvas
        ref={canvasRef}
        className="block top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default AnimatedGrid;
