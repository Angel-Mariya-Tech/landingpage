export const AngelWings = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
      {/* Left Wing */}
      <svg
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[40%] max-w-[500px] h-auto opacity-[0.06]"
        viewBox="0 0 300 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="animate-pulse" style={{ animationDuration: '4s' }}>
          {/* Primary feathers */}
          <path
            d="M280 200 Q200 180 150 100 Q140 150 160 200 Q140 180 100 80 Q100 140 130 200 Q100 160 60 60 Q70 130 110 200 Q70 140 30 40 Q50 120 90 200"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="hsl(var(--primary))"
            fillOpacity="0.3"
          />
          {/* Secondary feathers */}
          <path
            d="M280 200 Q210 220 170 300 Q165 250 180 200 Q155 260 130 340 Q135 270 160 200 Q120 280 90 360 Q105 280 140 200 Q85 300 50 380 Q80 290 120 200"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="hsl(var(--primary))"
            fillOpacity="0.3"
          />
          {/* Inner wing structure */}
          <path
            d="M280 200 Q240 200 220 180 Q230 200 220 220 Q240 200 280 200"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            fill="hsl(var(--primary))"
            fillOpacity="0.4"
          />
          {/* Decorative curves */}
          <path
            d="M260 200 Q200 150 140 120 M260 200 Q200 250 140 280"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            fill="none"
            strokeOpacity="0.5"
          />
        </g>
      </svg>

      {/* Right Wing (mirrored) */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] max-w-[500px] h-auto opacity-[0.06] scale-x-[-1]"
        viewBox="0 0 300 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
          {/* Primary feathers */}
          <path
            d="M280 200 Q200 180 150 100 Q140 150 160 200 Q140 180 100 80 Q100 140 130 200 Q100 160 60 60 Q70 130 110 200 Q70 140 30 40 Q50 120 90 200"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="hsl(var(--primary))"
            fillOpacity="0.3"
          />
          {/* Secondary feathers */}
          <path
            d="M280 200 Q210 220 170 300 Q165 250 180 200 Q155 260 130 340 Q135 270 160 200 Q120 280 90 360 Q105 280 140 200 Q85 300 50 380 Q80 290 120 200"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="hsl(var(--primary))"
            fillOpacity="0.3"
          />
          {/* Inner wing structure */}
          <path
            d="M280 200 Q240 200 220 180 Q230 200 220 220 Q240 200 280 200"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            fill="hsl(var(--primary))"
            fillOpacity="0.4"
          />
          {/* Decorative curves */}
          <path
            d="M260 200 Q200 150 140 120 M260 200 Q200 250 140 280"
            stroke="hsl(var(--primary))"
            strokeWidth="1.5"
            fill="none"
            strokeOpacity="0.5"
          />
        </g>
      </svg>

      {/* Center divine glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
    </div>
  );
};
