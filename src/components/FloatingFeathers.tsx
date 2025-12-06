import { useEffect, useState } from "react";

interface Feather {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: number;
  rotation: number;
  opacity: number;
}

export const FloatingFeathers = () => {
  const [feathers, setFeathers] = useState<Feather[]>([]);

  useEffect(() => {
    // Generate random feathers
    const generatedFeathers: Feather[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${12 + Math.random() * 8}s`,
      size: 20 + Math.random() * 30,
      rotation: Math.random() * 360,
      opacity: 0.15 + Math.random() * 0.2,
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
            top: "-50px",
            animationDelay: feather.delay,
            animationDuration: feather.duration,
          }}
        >
          <svg
            width={feather.size}
            height={feather.size * 2.5}
            viewBox="0 0 24 60"
            fill="none"
            style={{
              transform: `rotate(${feather.rotation}deg)`,
              opacity: feather.opacity,
            }}
          >
            {/* Elegant feather shape */}
            <path
              d="M12 0 C12 0 6 15 6 30 C6 45 12 60 12 60 C12 60 18 45 18 30 C18 15 12 0 12 0 Z"
              fill="url(#featherGradient)"
            />
            {/* Center spine */}
            <path
              d="M12 5 L12 55"
              stroke="hsl(var(--primary) / 0.3)"
              strokeWidth="0.5"
            />
            {/* Subtle detail lines */}
            <path
              d="M12 15 C10 18 8 20 6 22 M12 25 C10 28 8 30 7 32 M12 35 C10 38 8 40 7 42"
              stroke="hsl(var(--primary) / 0.2)"
              strokeWidth="0.3"
              fill="none"
            />
            <path
              d="M12 15 C14 18 16 20 18 22 M12 25 C14 28 16 30 17 32 M12 35 C14 38 16 40 17 42"
              stroke="hsl(var(--primary) / 0.2)"
              strokeWidth="0.3"
              fill="none"
            />
            <defs>
              <linearGradient id="featherGradient" x1="12" y1="0" x2="12" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
};
