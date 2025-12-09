export const WingsBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Left Wing - subtle shadow */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-[85%] -translate-y-1/2 w-[40%] max-w-[500px] h-auto opacity-[0.06]"
        viewBox="0 0 300 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wingBgGradientL" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#78716c" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#78716c" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <g>
          {/* Main wing shape */}
          <path
            d="M290 200 
               C250 180, 200 140, 140 80
               C150 120, 155 160, 160 200
               C140 160, 100 100, 50 40
               C80 100, 100 150, 120 200
               C90 160, 50 100, 10 50
               C50 110, 80 160, 100 200
               C70 180, 30 140, -10 100
               C30 150, 60 180, 80 200
               C50 220, 20 260, -10 300
               C30 270, 60 240, 80 200
               C60 240, 30 300, 10 350
               C50 300, 80 250, 100 200
               C80 250, 50 320, 30 380
               C70 320, 100 260, 120 200
               C110 260, 80 340, 60 400
               C100 340, 130 270, 160 200
               C155 260, 140 340, 130 400
               C160 340, 180 270, 200 200
               C250 220, 270 210, 290 200"
            stroke="url(#wingBgGradientL)"
            strokeWidth="2"
            fill="url(#wingBgGradientL)"
            fillOpacity="0.5"
          />
          {/* Feather details */}
          <path d="M250 200 Q200 160 150 100" stroke="#78716c" strokeWidth="1.5" opacity="0.5" fill="none" />
          <path d="M250 200 Q180 180 100 120" stroke="#78716c" strokeWidth="1.5" opacity="0.4" fill="none" />
          <path d="M250 200 Q200 240 150 300" stroke="#78716c" strokeWidth="1.5" opacity="0.5" fill="none" />
          <path d="M250 200 Q180 220 100 280" stroke="#78716c" strokeWidth="1.5" opacity="0.4" fill="none" />
        </g>
      </svg>

      {/* Right Wing (mirrored) */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-[15%] -translate-y-1/2 w-[40%] max-w-[500px] h-auto opacity-[0.06] scale-x-[-1]"
        viewBox="0 0 300 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wingBgGradientR" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#78716c" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#78716c" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <g>
          {/* Main wing shape */}
          <path
            d="M290 200 
               C250 180, 200 140, 140 80
               C150 120, 155 160, 160 200
               C140 160, 100 100, 50 40
               C80 100, 100 150, 120 200
               C90 160, 50 100, 10 50
               C50 110, 80 160, 100 200
               C70 180, 30 140, -10 100
               C30 150, 60 180, 80 200
               C50 220, 20 260, -10 300
               C30 270, 60 240, 80 200
               C60 240, 30 300, 10 350
               C50 300, 80 250, 100 200
               C80 250, 50 320, 30 380
               C70 320, 100 260, 120 200
               C110 260, 80 340, 60 400
               C100 340, 130 270, 160 200
               C155 260, 140 340, 130 400
               C160 340, 180 270, 200 200
               C250 220, 270 210, 290 200"
            stroke="url(#wingBgGradientR)"
            strokeWidth="2"
            fill="url(#wingBgGradientR)"
            fillOpacity="0.5"
          />
          {/* Feather details */}
          <path d="M250 200 Q200 160 150 100" stroke="#78716c" strokeWidth="1.5" opacity="0.5" fill="none" />
          <path d="M250 200 Q180 180 100 120" stroke="#78716c" strokeWidth="1.5" opacity="0.4" fill="none" />
          <path d="M250 200 Q200 240 150 300" stroke="#78716c" strokeWidth="1.5" opacity="0.5" fill="none" />
          <path d="M250 200 Q180 220 100 280" stroke="#78716c" strokeWidth="1.5" opacity="0.4" fill="none" />
        </g>
      </svg>
    </div>
  );
};
