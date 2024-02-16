import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const CanvasExam: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let WIDTH = window.innerWidth;
    let HEIGHT = window.innerHeight;
    let MAX_PARTICLES = (WIDTH * HEIGHT) / 20000;
    let DRAW_INTERVAL = 60;
    let gradient: CanvasGradient | null = null;
    let pixies = [];

    function setDimensions() {
      WIDTH = window.innerWidth;
      HEIGHT = window.innerHeight;
      MAX_PARTICLES = (WIDTH * HEIGHT) / 20000;
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      console.log("Resize to " + WIDTH + "x" + HEIGHT);
    }

    setDimensions();
    window.addEventListener("resize", setDimensions);

    function Circle() {
      this.settings = { ttl: 10000, xmax: 5, ymax: 2, rmin: 8, rmax: 15, drt: 10 };

      this.reset = function () {
        this.x = WIDTH * Math.random();
        this.y = HEIGHT * Math.random();
        this.r = (this.settings.rmax - 1) * Math.random() + 1;
        this.dx = (Math.random() * this.settings.xmax) * (Math.random() < 0.5 ? -1 : 1);
        this.dy = (Math.random() * this.settings.ymax) * (Math.random() < 0.5 ? -1 : 1);
        this.hl = (this.settings.ttl / DRAW_INTERVAL) * (this.r / this.settings.rmax);
        this.rt = 0;
        this.settings.drt = Math.random() + 1;
        this.stop = Math.random() * 0.2 + 0.4;
      };

      this.fade = function () {
        this.rt += this.settings.drt;

        if (this.rt >= this.hl) {
          this.rt = this.hl;
          this.settings.drt = this.settings.drt * -1;
        } else if (this.rt < 0) {
          this.reset();
        }
      };

      this.draw = function () {
        var newo = this.rt / this.hl;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        context.closePath();

        var cr = this.r * newo;
        gradient = context.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          cr < this.settings.rmin ? this.settings.rmin : cr
        );
        gradient.addColorStop(0.0, "rgba(255,255,255," + newo + ")");
        gradient.addColorStop(this.stop, "rgba(77,101,181," + newo * 0.6 + ")");
        gradient.addColorStop(1.0, "rgba(77,101,181,0)");
        context.fillStyle = gradient;
        context.fill();
      };

      this.move = function () {
        this.x += (1 - this.rt / this.hl) * this.dx;
        this.y += (1 - this.rt / this.hl) * this.dy;
        if (this.x > WIDTH || this.x < 0) this.dx *= -1;
        if (this.y > HEIGHT || this.y < 0) this.dy *= -1;
      };
    }

    function draw() {
      context.clearRect(0, 0, WIDTH, HEIGHT);

      for (var i = pixies.length; i < MAX_PARTICLES; i++) {
        pixies.push(new Circle());
        pixies[i].reset();
      }

      for (var i = 0; i < MAX_PARTICLES; i++) {
        pixies[i].fade();
        pixies[i].move();
        pixies[i].draw();
      }

      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", setDimensions);
    };
  }, []);

  return (
    <StyledCanvasWrapper>
      <div className="container">
        <canvas ref={canvasRef} className="pixie"></canvas>
        <div className="mountains"></div>
        <div className="grass"></div>
      </div>
    </StyledCanvasWrapper>
  );
};

export default CanvasExam;

const StyledCanvasWrapper = styled.div`
  .pixie {
    z-index: 0;
    background: -moz-linear-gradient(top, #040429, #257eb7);
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #040429),
      color-stop(100%, #257eb7)
    );
    width: 500px;
    height: 500px;
  }
  .mountains,
  .grass {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  .mountains {
    height: 156px;
  }
`;