import { useEffect, useState } from "react";

interface Feather {
  id: number;
  left: string;
  delay: string;
  duration: string;
  scale: number;
  rotation: number;
  opacity: number;
}

const FeatherSVG = ({ opacity }: { opacity: number }) => (
  <svg
    width="40"
    height="80"
    viewBox="0 0 40 80"
    fill="none"
    style={{ opacity }}
  >
    {/* Main feather shape with realistic barbs */}
    <defs>
      <linearGradient id="featherGrad" x1="20" y1="0" x2="20" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
        <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    
    {/* Central shaft/rachis */}
    <path
      d="M20 2 Q21 40 20 78"
      stroke="hsl(var(--foreground) / 0.3)"
      strokeWidth="1.5"
      fill="none"
    />
    
    {/* Left barbs */}
    <path d="M20 8 Q12 10 4 8" stroke="hsl(var(--primary) / 0.4)" strokeWidth="0.8" fill="none" />
    <path d="M20 14 Q10 16 3 13" stroke="hsl(var(--primary) / 0.35)" strokeWidth="0.8" fill="none" />
    <path d="M20 20 Q9 23 2 19" stroke="hsl(var(--primary) / 0.3)" strokeWidth="0.8" fill="none" />
    <path d="M20 26 Q8 30 2 26" stroke="hsl(var(--accent) / 0.35)" strokeWidth="0.8" fill="none" />
    <path d="M20 32 Q9 36 3 33" stroke="hsl(var(--accent) / 0.3)" strokeWidth="0.8" fill="none" />
    <path d="M20 38 Q10 42 4 40" stroke="hsl(var(--accent) / 0.3)" strokeWidth="0.8" fill="none" />
    <path d="M20 44 Q11 48 5 46" stroke="hsl(var(--primary) / 0.25)" strokeWidth="0.8" fill="none" />
    <path d="M20 50 Q12 54 7 52" stroke="hsl(var(--primary) / 0.2)" strokeWidth="0.8" fill="none" />
    <path d="M20 56 Q14 59 9 58" stroke="hsl(var(--primary) / 0.15)" strokeWidth="0.8" fill="none" />
    <path d="M20 62 Q15 64 11 63" stroke="hsl(var(--primary) / 0.1)" strokeWidth="0.6" fill="none" />
    
    {/* Right barbs */}
    <path d="M20 8 Q28 10 36 8" stroke="hsl(var(--primary) / 0.4)" strokeWidth="0.8" fill="none" />
    <path d="M20 14 Q30 16 37 13" stroke="hsl(var(--primary) / 0.35)" strokeWidth="0.8" fill="none" />
    <path d="M20 20 Q31 23 38 19" stroke="hsl(var(--primary) / 0.3)" strokeWidth="0.8" fill="none" />
    <path d="M20 26 Q32 30 38 26" stroke="hsl(var(--accent) / 0.35)" strokeWidth="0.8" fill="none" />
    <path d="M20 32 Q31 36 37 33" stroke="hsl(var(--accent) / 0.3)" strokeWidth="0.8" fill="none" />
    <path d="M20 38 Q30 42 36 40" stroke="hsl(var(--accent) / 0.3)" strokeWidth="0.8" fill="none" />
    <path d="M20 44 Q29 48 35 46" stroke="hsl(var(--primary) / 0.25)" strokeWidth="0.8" fill="none" />
    <path d="M20 50 Q28 54 33 52" stroke="hsl(var(--primary) / 0.2)" strokeWidth="0.8" fill="none" />
    <path d="M20 56 Q26 59 31 58" stroke="hsl(var(--primary) / 0.15)" strokeWidth="0.8" fill="none" />
    <path d="M20 62 Q25 64 29 63" stroke="hsl(var(--primary) / 0.1)" strokeWidth="0.6" fill="none" />
    
    {/* Soft feather fill for body */}
    <path
      d="M20 5 Q4 20 3 35 Q4 50 20 70 Q36 50 37 35 Q36 20 20 5"
      fill="url(#featherGrad)"
      opacity="0.15"
    />
  </svg>
);

export const FloatingFeathers = () => {
  const [feathers, setFeathers] = useState<Feather[]>([]);

  useEffect(() => {
    const generatedFeathers: Feather[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: `${10 + Math.random() * 80}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${15 + Math.random() * 10}s`,
      scale: 0.6 + Math.random() * 0.8,
      rotation: -30 + Math.random() * 60,
      opacity: 0.4 + Math.random() * 0.4,
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
            top: "-100px",
            animationDelay: feather.delay,
            animationDuration: feather.duration,
            transform: `scale(${feather.scale}) rotate(${feather.rotation}deg)`,
          }}
        >
          <FeatherSVG opacity={feather.opacity} />
        </div>
      ))}
    </div>
  );
};
