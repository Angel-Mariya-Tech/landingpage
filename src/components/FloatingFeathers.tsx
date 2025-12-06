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
    const generatedFeathers: Feather[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      delay: `${Math.random() * 12}s`,
      duration: `${22 + Math.random() * 10}s`,
      scale: 0.07 + Math.random() * 0.06,
      rotation: -20 + Math.random() * 40,
      opacity: 0.6 + Math.random() * 0.3,
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
            top: "-100px",
            width: "90px",
            height: "90px",
            animationDelay: feather.delay,
            animationDuration: feather.duration,
            transform: `scale(${feather.scale}) rotate(${feather.rotation}deg)`,
            opacity: feather.opacity,
            filter: "brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)",
          }}
        />
      ))}
    </div>
  );
};
