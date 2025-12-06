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

// Individual feather SVG components extracted from the source
const Feather1 = () => (
  <svg viewBox="0 0 120 300" fill="none" className="w-full h-full">
    <g fill="currentColor">
      <path d="M60 0 Q55 30 50 60 Q45 90 48 120 Q50 150 55 180 Q58 210 60 240 Q62 270 60 300" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M60 20 Q40 35 25 50 Q15 65 20 80 Q30 90 50 85 Q55 75 58 60" opacity="0.8"/>
      <path d="M60 20 Q80 35 95 50 Q105 65 100 80 Q90 90 70 85 Q65 75 62 60" opacity="0.8"/>
      <path d="M58 60 Q35 80 20 100 Q10 120 15 140 Q25 155 50 145 Q55 130 57 110" opacity="0.7"/>
      <path d="M62 60 Q85 80 100 100 Q110 120 105 140 Q95 155 70 145 Q65 130 63 110" opacity="0.7"/>
      <path d="M57 110 Q30 135 18 160 Q8 185 15 205 Q28 220 52 210 Q56 190 58 165" opacity="0.6"/>
      <path d="M63 110 Q90 135 102 160 Q112 185 105 205 Q92 220 68 210 Q64 190 62 165" opacity="0.6"/>
      <path d="M58 165 Q38 190 28 215 Q20 240 30 260 Q42 275 55 265 Q58 245 59 220" opacity="0.5"/>
      <path d="M62 165 Q82 190 92 215 Q100 240 90 260 Q78 275 65 265 Q62 245 61 220" opacity="0.5"/>
    </g>
  </svg>
);

const Feather2 = () => (
  <svg viewBox="0 0 100 280" fill="none" className="w-full h-full">
    <g fill="currentColor">
      <path d="M50 0 Q48 40 45 80 Q43 120 46 160 Q48 200 50 240 Q52 260 50 280" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M50 15 Q30 30 18 48 Q10 65 18 80 Q32 88 48 75 Q50 60 50 45" opacity="0.75"/>
      <path d="M50 15 Q70 30 82 48 Q90 65 82 80 Q68 88 52 75 Q50 60 50 45" opacity="0.75"/>
      <path d="M49 50 Q28 72 15 95 Q5 118 12 138 Q25 152 47 140 Q49 120 49 95" opacity="0.65"/>
      <path d="M51 50 Q72 72 85 95 Q95 118 88 138 Q75 152 53 140 Q51 120 51 95" opacity="0.65"/>
      <path d="M48 100 Q25 128 15 155 Q8 182 18 202 Q32 215 48 200 Q49 175 49 148" opacity="0.55"/>
      <path d="M52 100 Q75 128 85 155 Q92 182 82 202 Q68 215 52 200 Q51 175 51 148" opacity="0.55"/>
      <path d="M49 155 Q35 180 28 205 Q22 230 32 248 Q42 258 49 245 Q50 225 50 200" opacity="0.45"/>
      <path d="M51 155 Q65 180 72 205 Q78 230 68 248 Q58 258 51 245 Q50 225 50 200" opacity="0.45"/>
    </g>
  </svg>
);

const Feather3 = () => (
  <svg viewBox="0 0 90 250" fill="none" className="w-full h-full">
    <g fill="currentColor">
      <path d="M45 0 Q42 35 40 70 Q38 105 42 140 Q44 175 45 210 Q46 235 45 250" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M45 12 Q28 25 18 42 Q10 58 16 72 Q28 82 43 70 Q45 55 45 38" opacity="0.8"/>
      <path d="M45 12 Q62 25 72 42 Q80 58 74 72 Q62 82 47 70 Q45 55 45 38" opacity="0.8"/>
      <path d="M44 45 Q22 68 12 92 Q4 116 12 135 Q26 148 43 135 Q44 115 44 90" opacity="0.65"/>
      <path d="M46 45 Q68 68 78 92 Q86 116 78 135 Q64 148 47 135 Q46 115 46 90" opacity="0.65"/>
      <path d="M43 95 Q25 120 18 145 Q12 170 22 188 Q35 200 44 185 Q44 162 44 138" opacity="0.5"/>
      <path d="M47 95 Q65 120 72 145 Q78 170 68 188 Q55 200 46 185 Q46 162 46 138" opacity="0.5"/>
    </g>
  </svg>
);

const Feather4 = () => (
  <svg viewBox="0 0 80 220" fill="none" className="w-full h-full">
    <g fill="currentColor">
      <path d="M40 0 Q38 30 36 60 Q35 90 38 120 Q40 150 40 180 Q41 200 40 220" stroke="currentColor" strokeWidth="1.2" fill="none"/>
      <path d="M40 10 Q25 22 16 38 Q9 52 15 65 Q26 74 39 62 Q40 48 40 32" opacity="0.75"/>
      <path d="M40 10 Q55 22 64 38 Q71 52 65 65 Q54 74 41 62 Q40 48 40 32" opacity="0.75"/>
      <path d="M39 40 Q20 60 12 82 Q5 104 14 120 Q28 132 39 118 Q40 96 39 72" opacity="0.6"/>
      <path d="M41 40 Q60 60 68 82 Q75 104 66 120 Q52 132 41 118 Q40 96 41 72" opacity="0.6"/>
      <path d="M39 80 Q24 102 18 125 Q14 148 24 165 Q36 175 40 160 Q40 140 39 115" opacity="0.45"/>
      <path d="M41 80 Q56 102 62 125 Q66 148 56 165 Q44 175 40 160 Q40 140 41 115" opacity="0.45"/>
    </g>
  </svg>
);

const Feather5 = () => (
  <svg viewBox="0 0 70 200" fill="none" className="w-full h-full">
    <g fill="currentColor">
      <path d="M35 0 Q33 28 32 56 Q31 84 34 112 Q35 140 35 168 Q36 185 35 200" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M35 8 Q22 18 14 32 Q8 45 13 56 Q23 64 34 54 Q35 42 35 28" opacity="0.7"/>
      <path d="M35 8 Q48 18 56 32 Q62 45 57 56 Q47 64 36 54 Q35 42 35 28" opacity="0.7"/>
      <path d="M34 35 Q18 52 11 72 Q5 92 13 106 Q25 116 34 104 Q35 85 34 64" opacity="0.55"/>
      <path d="M36 35 Q52 52 59 72 Q65 92 57 106 Q45 116 36 104 Q35 85 36 64" opacity="0.55"/>
      <path d="M34 70 Q22 90 17 110 Q14 130 22 145 Q32 154 35 140 Q35 122 34 100" opacity="0.4"/>
      <path d="M36 70 Q48 90 53 110 Q56 130 48 145 Q38 154 35 140 Q35 122 36 100" opacity="0.4"/>
    </g>
  </svg>
);

const featherComponents = [Feather1, Feather2, Feather3, Feather4, Feather5];

export const FloatingFeathers = () => {
  const [feathers, setFeathers] = useState<Feather[]>([]);

  useEffect(() => {
    const generatedFeathers: Feather[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      delay: `${Math.random() * 12}s`,
      duration: `${20 + Math.random() * 15}s`,
      scale: 0.4 + Math.random() * 0.5,
      rotation: -25 + Math.random() * 50,
      opacity: 0.25 + Math.random() * 0.35,
      variant: Math.floor(Math.random() * featherComponents.length),
    }));
    setFeathers(generatedFeathers);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {feathers.map((feather) => {
        const FeatherComponent = featherComponents[feather.variant];
        return (
          <div
            key={feather.id}
            className="absolute animate-float-feather text-primary/40"
            style={{
              left: feather.left,
              top: "-150px",
              width: "60px",
              height: "160px",
              animationDelay: feather.delay,
              animationDuration: feather.duration,
              transform: `scale(${feather.scale}) rotate(${feather.rotation}deg)`,
              opacity: feather.opacity,
              filter: "drop-shadow(0 2px 4px hsl(var(--primary) / 0.2))",
            }}
          >
            <FeatherComponent />
          </div>
        );
      })}
    </div>
  );
};
