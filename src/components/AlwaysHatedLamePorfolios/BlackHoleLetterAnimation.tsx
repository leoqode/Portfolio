import { useEffect, useRef, useState } from "react";

export interface Props {
  text: Array<string>;
}

const requestAnimFrame =
  window.requestAnimationFrame ||
  function (callback: () => void) {
    window.setTimeout(callback, 1000 / 60);
  };

const TextParticle = (
  x: number,
  y: number,
  distance: number,
  text: string
) => {
  let angle = Math.random() * 2 * Math.PI;
  const opacity = (Math.random() * 5 + 2) / 10;
  const particleDistance = (1 / opacity) * distance;
  const speed = particleDistance * 0.00003;

  const position = {
    x: x + particleDistance * Math.cos(angle),
    y: y + particleDistance * Math.sin(angle),
  };

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
    ctx.font = "12px Arial";
    ctx.fillText(text, position.x, position.y);
  };

  const update = (ctx: CanvasRenderingContext2D) => {
    angle += speed;
    position.x = x + particleDistance * Math.cos(angle);
    position.y = y + particleDistance * Math.sin(angle);
    draw(ctx);
  };

  return { update };
};

const BlackHoleAnimation = ({ text }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [particles, setParticles] = useState<Array<object>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const position = {
          x: canvas.width / 2,
          y: canvas.height / 2,
        };
        const radius = 30;
        const count = 5;
        const updatedParticles: Array<object> = [];

        const updateParticles = () => {
          updatedParticles.length = 0;
          text.forEach((item) => {
            for (let i = 0; i < count; i++) {
              updatedParticles.push(
                TextParticle(position.x, position.y, radius, item)
              );
            }
          });
          setParticles([...updatedParticles]);
        };

        updateParticles();

        const draw = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          const gradient = ctx.createRadialGradient(
            position.x,
            position.y,
            0,
            position.x,
            position.y,
            radius + 50
          );
          gradient.addColorStop(0, "black");
          gradient.addColorStop(1, "white");

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(position.x, position.y, radius, 0, Math.PI * 2, false);
          ctx.fill();
          ctx.closePath();
        };

        const update = () => {
          particles.forEach((particle: any) => particle.update(ctx));
          draw();
        };

        const loop = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          update();
          requestAnimFrame(loop);
        };

        loop();
      }
    }
  }, [text]);

  return (
    <div id="black_hole_animation">
      <canvas width={500} height={500} ref={canvasRef} />
    </div>
  );
};

export default BlackHoleAnimation;
