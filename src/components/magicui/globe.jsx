import createGlobe from "cobe";
import { useEffect, useRef, useCallback } from "react";
import { useSpring } from 'react-spring';

export default function Cobe() {
  const canvasRef = useRef();
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: { mass: 1, tension: 280, friction: 50, precision: 0.001 },
  }));

  useEffect(() => {
    let phi = 0;
    let width = canvasRef.current?.offsetWidth || 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
        globe.resize({ width: width * 2, height: width * 2 });
      }
    };

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: window.devicePixelRatio || 2,
      width: 800,
  height: 800,
      phi: 0,
      theta: 0.3,
      dark: 0.1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1, 1, 1],
      markers: [
        { location: [14.5995, 120.9842], size: 0.03 },
        { location: [19.076, 72.8777], size: 0.1 },
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [30.0444, 31.2357], size: 0.07 },
        { location: [39.9042, 116.4074], size: 0.08 },
        { location: [-23.5505, -46.6333], size: 0.1 },
        { location: [19.4326, -99.1332], size: 0.1 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [34.6937, 135.5022], size: 0.05 },
        { location: [41.0082, 28.9784], size: 0.06 },
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.003; // Smoother animation
        state.phi = phi + r.get();
      },
    });

    window.addEventListener('resize', onResize);
    onResize(); // Initial resize call

    setTimeout(() => {
      canvasRef.current.style.opacity = '1';
    }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [r]);

  const handlePointerDown = useCallback((e) => {
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
    canvasRef.current.style.cursor = 'grabbing';
  }, []);

  const handlePointerUp = useCallback(() => {
    pointerInteracting.current = null;
    canvasRef.current.style.cursor = 'grab';
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      api.start({ r: delta / 200 });
    }
  }, [api]);

  const handleTouchMove = useCallback((e) => {
    if (pointerInteracting.current !== null && e.touches[0]) {
      const delta = e.touches[0].clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      api.start({ r: delta / 100 });
    }
  }, [api]);

  return (
    <div className="absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[400px]">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab  opacity-0 transition-opacity duration-1000 ease-in-out"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      />
    </div>
  );
}
