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
  blur: number;
  animationClass: string;
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
    const animationClasses = [
      "animate-float-feather-1",
      "animate-float-feather-2",
      "animate-float-feather-3",
    ];
    const generatedFeathers: Feather[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      delay: `${Math.random() * 15}s`,
      duration: `${20 + Math.random() * 15}s`,
      scale: 0.12 + Math.random() * 0.1,
      rotation: -25 + Math.random() * 50,
      opacity: 0.5 + Math.random() * 0.4,
      variant: Math.floor(Math.random() * featherSvgs.length),
      blur: Math.random() * 2,
      animationClass: animationClasses[Math.floor(Math.random() * animationClasses.length)],
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
          className={`absolute ${feather.animationClass}`}
          style={{
            left: feather.left,
            top: "-120px",
            width: "120px",
            height: "120px",
            animationDelay: feather.delay,
            animationDuration: feather.duration,
            transform: `scale(${feather.scale}) rotate(${feather.rotation}deg)`,
            opacity: feather.opacity,
            filter: `brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%) blur(${feather.blur}px)`,
          }}
        />
      ))}
    </div>
  );
};
