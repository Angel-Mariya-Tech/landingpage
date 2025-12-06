import { useEffect, useState } from "react";

interface Feather {
  id: number;
  left: string;
  delay: string;
  duration: string;
  scale: number;
  rotation: number;
  opacity: number;
  variant: number;
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

  useEffect(() => {
    const generatedFeathers: Feather[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      delay: `${Math.random() * 15}s`,
      duration: `${18 + Math.random() * 12}s`,
      scale: 0.06 + Math.random() * 0.08,
      rotation: -30 + Math.random() * 60,
      opacity: 0.3 + Math.random() * 0.4,
      variant: Math.floor(Math.random() * featherSvgs.length),
    }));
    setFeathers(generatedFeathers);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {feathers.map((feather) => (
        <img
          key={feather.id}
          src={featherSvgs[feather.variant]}
          alt=""
          className="absolute animate-float-feather"
          style={{
            left: feather.left,
            top: "-120px",
            width: "100px",
            height: "100px",
            animationDelay: feather.delay,
            animationDuration: feather.duration,
            transform: `scale(${feather.scale}) rotate(${feather.rotation}deg)`,
            opacity: feather.opacity,
            filter: "drop-shadow(0 2px 8px hsl(var(--primary) / 0.3))",
          }}
        />
      ))}
    </div>
  );
};
