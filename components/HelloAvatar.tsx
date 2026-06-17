import React, { useRef, useEffect } from 'react';

const CanvasHalfBodyAvatar = ({ size = 200, className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // High-DPI screen support for crisp edges
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;

    // Normalize to a 100x100 grid so all coordinates are resolution-independent
    ctx.scale(dpr * (size / 100), dpr * (size / 100));

    // Custom helper for rounded rectangles
    const roundRect = (context, x, y, width, height, radius) => {
      context.beginPath();
      context.moveTo(x + radius, y);
      context.lineTo(x + width - radius, y);
      context.quadraticCurveTo(x + width, y, x + width, y + radius);
      context.lineTo(x + width, y + height - radius);
      context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      context.lineTo(x + radius, y + height);
      context.quadraticCurveTo(x, y + height, x, y + height - radius);
      context.lineTo(x, y + radius);
      context.quadraticCurveTo(x, y, x + radius, y);
      context.closePath();
    };

    const skinColor = "#F2C088";
    const hairColor = "#FDE047";
    const accessoryColor = "#D8B4E2"; // Mask & Headband
    const shirtColor = "#1E3A8A";     // Deep navy — pops against the cyan/blue badge

    const render = (time) => {
      ctx.clearRect(0, 0, 100, 100);

      // --- Circular badge frame: clip everything to a centered circle ---
      ctx.save();
      ctx.beginPath();
      ctx.arc(50, 50, 49, 0, Math.PI * 2);
      ctx.clip();

      // Brand gradient background (matches the navbar logo gradient)
      const bg = ctx.createLinearGradient(0, 0, 100, 100);
      bg.addColorStop(0, "#22D3EE");   // cyan-400
      bg.addColorStop(0.5, "#0EA5E9"); // sky-500
      bg.addColorStop(1, "#2563EB");   // blue-600
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, 100, 100);

      // Soft top highlight for a glossy, polished look
      const gloss = ctx.createRadialGradient(38, 30, 4, 50, 40, 70);
      gloss.addColorStop(0, "rgba(255,255,255,0.30)");
      gloss.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gloss;
      ctx.fillRect(0, 0, 100, 100);

      // --- 1. Shoulders / Tank Top (fills the bottom of the badge) ---
      ctx.fillStyle = shirtColor;
      ctx.beginPath();
      ctx.moveTo(16, 100);
      ctx.lineTo(24, 80);
      ctx.quadraticCurveTo(50, 70, 76, 80); // shoulder line arcing over the neck
      ctx.lineTo(84, 100);
      ctx.closePath();
      ctx.fill();

      // Neck
      ctx.fillStyle = skinColor;
      ctx.fillRect(43, 60, 14, 12);

      // --- 2. Right Arm (Waving Animation) — peeks up from the shoulder ---
      const waveAngle = Math.sin(time / 150) * 0.35 - 0.15;
      ctx.save();
      ctx.translate(74, 80); // pivot at right shoulder
      ctx.rotate(waveAngle);

      ctx.fillStyle = skinColor;
      // Upper arm raised toward the top-right
      roundRect(ctx, -3, -26, 9, 30, 4.5);
      ctx.fill();
      // Hand
      ctx.beginPath();
      ctx.arc(1, -28, 6, 0, Math.PI * 2);
      ctx.fill();
      // Fingers
      roundRect(ctx, -4, -36, 3, 9, 1.5);
      roundRect(ctx, 0, -38, 3, 10, 1.5);
      roundRect(ctx, 4, -36, 3, 9, 1.5);
      // Armband
      ctx.fillStyle = accessoryColor;
      roundRect(ctx, -4, -8, 11, 4, 2);
      ctx.fill();
      ctx.restore();

      // Ears
      ctx.fillStyle = skinColor;
      ctx.beginPath();
      ctx.arc(35, 42, 4, 0, Math.PI * 2);
      ctx.arc(65, 42, 4, 0, Math.PI * 2);
      ctx.fill();

      // --- 3. Head & Face (centered, fills the frame) ---
      ctx.fillStyle = skinColor;
      roundRect(ctx, 35, 26, 30, 30, 11);
      ctx.fill();

      // Hair (blonde) — rounded cap over the top of the head
      ctx.fillStyle = hairColor;
      ctx.beginPath();
      ctx.arc(50, 30, 18, Math.PI, 0);
      ctx.fill();
      ctx.fillRect(32, 28, 6, 10); // left sideburn
      ctx.fillRect(62, 28, 6, 10); // right sideburn

      // Headband
      ctx.fillStyle = accessoryColor;
      roundRect(ctx, 33, 24, 34, 6, 3);
      ctx.fill();

      // Eyes
      ctx.fillStyle = "#33271F";
      ctx.beginPath();
      ctx.arc(44, 42, 2, 0, Math.PI * 2);
      ctx.arc(56, 42, 2, 0, Math.PI * 2);
      ctx.fill();

      // Mask (purple) over the lower face
      ctx.fillStyle = accessoryColor;
      ctx.beginPath();
      ctx.moveTo(35, 46);
      ctx.quadraticCurveTo(50, 42, 65, 46); // top curve
      ctx.lineTo(61, 55);
      ctx.quadraticCurveTo(50, 60, 39, 55); // bottom curve
      ctx.closePath();
      ctx.fill();
      // Mask straps to the ears
      ctx.strokeStyle = accessoryColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(35, 46);
      ctx.lineTo(32, 43);
      ctx.moveTo(65, 46);
      ctx.lineTo(68, 43);
      ctx.stroke();

      ctx.restore(); // remove circular clip

      // Crisp ring around the badge
      ctx.beginPath();
      ctx.arc(50, 50, 48, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,255,255,0.55)";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', borderRadius: '9999px' }}
      aria-label="Waving avatar"
      role="img"
    />
  );
};

export default CanvasHalfBodyAvatar;
