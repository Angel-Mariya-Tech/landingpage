import { useEffect, useState, useRef, useCallback } from "react";

interface Feather {
  id: number;
  left: number;
  delay: string;
  duration: string;
  scale: number;
  rotation: number;
  opacity: number;
  variant: number;
  blur: number;
  animationClass: string;
  offsetX: number;
  offsetY: number;
}

const featherSvgs = [
  "/feathers/f1.svg",
  "/feathers/f2.svg",
  "/feathers/f3.svg",
  "/feathers/f4.svg",
  "/feathers/f5.svg",
  "/feathers/f6.svg",
  "/feathers/f7.svg",
  "/feathers/f8.svg",
  "/feathers/f9.svg",
  "/feathers/f10.svg",
];

export const FloatingFeathers = () => {
  const [feathers, setFeathers] = useState<Feather[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const featherRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const animationClasses = [
      "animate-float-feather-1",
      "animate-float-feather-2",
      "animate-float-feather-3",
    ];
    const generatedFeathers: Feather[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: 10 + (i * 15) + Math.random() * 10,
      delay: `${i * 2.5 + Math.random() * 3}s`,
      duration: `${22 + Math.random() * 12}s`,
      scale: 0.06 + Math.random() * 0.04,
      rotation: -20 + Math.random() * 40,
      opacity: 0.5 + Math.random() * 0.35,
      variant: Math.floor(Math.random() * featherSvgs.length),
      blur: Math.random() * 1.5,
      animationClass: animationClasses[Math.floor(Math.random() * animationClasses.length)],
      offsetX: 0,
      offsetY: 0,
    }));
    setFeathers(generatedFeathers);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    setFeathers((prevFeathers) =>
      prevFeathers.map((feather, index) => {
        const featherEl = featherRefs.current[index];
        if (!featherEl) return feather;

        const featherRect = featherEl.getBoundingClientRect();
        const featherX = featherRect.left - containerRect.left + featherRect.width / 2;
        const featherY = featherRect.top - containerRect.top + featherRect.height / 2;

        const distX = mouseX - featherX;
        const distY = mouseY - featherY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        const maxDistance = 120;
        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 40;
          const angle = Math.atan2(distY, distX);
          return {
            ...feather,
            offsetX: -Math.cos(angle) * force,
            offsetY: -Math.sin(angle) * force,
          };
        }

        return {
          ...feather,
          offsetX: feather.offsetX * 0.92,
          offsetY: feather.offsetY * 0.92,
        };
      })
    );
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const parent = container.parentElement;
    if (!parent) return;

    parent.addEventListener("mousemove", handleMouseMove);
    return () => parent.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {feathers.map((feather, index) => (
        <img
          key={feather.id}
          ref={(el) => (featherRefs.current[index] = el)}
          src={featherSvgs[feather.variant]}
          alt=""
          className={`absolute ${feather.animationClass} transition-transform duration-200 ease-out`}
          style={{
            left: `${feather.left}%`,
            top: "-80px",
            width: "80px",
            height: "80px",
            animationDelay: feather.delay,
            animationDuration: feather.duration,
            transform: `scale(${feather.scale}) rotate(${feather.rotation}deg) translate(${feather.offsetX}px, ${feather.offsetY}px)`,
            opacity: feather.opacity,
            filter: `brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%) blur(${feather.blur}px)`,
          }}
        />
      ))}
    </div>
  );
};
