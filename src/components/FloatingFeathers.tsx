import { useEffect, useState } from "react";
import feathersImage from "@/assets/feathers.avif";

interface Feather {
  id: number;
  left: string;
  delay: string;
  duration: string;
  scale: number;
  rotation: number;
  opacity: number;
  clipX: number;
  clipY: number;
}

export const FloatingFeathers = () => {
  const [feathers, setFeathers] = useState<Feather[]>([]);

  useEffect(() => {
    // Create individual feathers by using different clip positions from the source image
    const generatedFeathers: Feather[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${18 + Math.random() * 12}s`,
      scale: 0.15 + Math.random() * 0.2,
      rotation: -20 + Math.random() * 40,
      opacity: 0.3 + Math.random() * 0.4,
      // Different positions to show different feathers from the sprite
      clipX: Math.floor(Math.random() * 3) * 33,
      clipY: Math.floor(Math.random() * 2) * 50,
    }));
    setFeathers(generatedFeathers);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {feathers.map((feather) => (
        <div
          key={feather.id}
          className="absolute animate-float-feather"
          style={{
            left: feather.left,
            top: "-150px",
            animationDelay: feather.delay,
            animationDuration: feather.duration,
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              overflow: "hidden",
              transform: `scale(${feather.scale}) rotate(${feather.rotation}deg)`,
              opacity: feather.opacity,
              filter: "brightness(1.2) drop-shadow(0 0 10px hsl(var(--primary) / 0.3))",
            }}
          >
            <img
              src={feathersImage}
              alt=""
              style={{
                width: "360px",
                height: "240px",
                objectFit: "cover",
                objectPosition: `-${feather.clipX}% -${feather.clipY}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
