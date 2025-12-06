export const AngelWings = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Divine light rays from top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        {/* Central divine glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-amber-100/20 via-amber-50/10 to-transparent blur-3xl" />
        
        {/* Light rays */}
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-[0.15]"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="rayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FCD34D" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Divine rays emanating from top */}
          <path d="M400 0 L380 600 L420 600 Z" fill="url(#rayGradient)" />
          <path d="M400 0 L300 600 L340 600 Z" fill="url(#rayGradient)" opacity="0.7" />
          <path d="M400 0 L460 600 L500 600 Z" fill="url(#rayGradient)" opacity="0.7" />
          <path d="M400 0 L200 600 L250 600 Z" fill="url(#rayGradient)" opacity="0.5" />
          <path d="M400 0 L550 600 L600 600 Z" fill="url(#rayGradient)" opacity="0.5" />
          <path d="M400 0 L100 600 L160 600 Z" fill="url(#rayGradient)" opacity="0.3" />
          <path d="M400 0 L640 600 L700 600 Z" fill="url(#rayGradient)" opacity="0.3" />
        </svg>
      </div>

      {/* Halo/Aureole at top */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2">
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute -inset-8 bg-amber-200/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
          {/* Halo ring */}
          <svg
            className="w-32 h-16 opacity-20"
            viewBox="0 0 120 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="60"
              cy="30"
              rx="55"
              ry="25"
              stroke="#FCD34D"
              strokeWidth="3"
              fill="none"
            />
            <ellipse
              cx="60"
              cy="30"
              rx="55"
              ry="25"
              stroke="#FCD34D"
              strokeWidth="1"
              fill="#FCD34D"
              fillOpacity="0.1"
            />
          </svg>
        </div>
      </div>

      {/* Left Wing */}
      <svg
        className="absolute left-0 top-1/2 -translate-y-1/3 w-[35%] max-w-[400px] h-auto opacity-[0.08]"
        viewBox="0 0 300 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wingGradientL" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <g className="animate-pulse" style={{ animationDuration: '4s' }}>
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
            stroke="url(#wingGradientL)"
            strokeWidth="2"
            fill="url(#wingGradientL)"
            fillOpacity="0.4"
          />
          {/* Feather details */}
          <path d="M250 200 Q200 160 150 100" stroke="#FCD34D" strokeWidth="1" opacity="0.5" fill="none" />
          <path d="M250 200 Q180 180 100 120" stroke="#FCD34D" strokeWidth="1" opacity="0.4" fill="none" />
          <path d="M250 200 Q200 240 150 300" stroke="#FCD34D" strokeWidth="1" opacity="0.5" fill="none" />
          <path d="M250 200 Q180 220 100 280" stroke="#FCD34D" strokeWidth="1" opacity="0.4" fill="none" />
        </g>
      </svg>

      {/* Right Wing (mirrored) */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/3 w-[35%] max-w-[400px] h-auto opacity-[0.08] scale-x-[-1]"
        viewBox="0 0 300 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wingGradientR" x1="100%" y1="50%" x2="0%" y2="50%">
            <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <g className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
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
            stroke="url(#wingGradientR)"
            strokeWidth="2"
            fill="url(#wingGradientR)"
            fillOpacity="0.4"
          />
          {/* Feather details */}
          <path d="M250 200 Q200 160 150 100" stroke="#FCD34D" strokeWidth="1" opacity="0.5" fill="none" />
          <path d="M250 200 Q180 180 100 120" stroke="#FCD34D" strokeWidth="1" opacity="0.4" fill="none" />
          <path d="M250 200 Q200 240 150 300" stroke="#FCD34D" strokeWidth="1" opacity="0.5" fill="none" />
          <path d="M250 200 Q180 220 100 280" stroke="#FCD34D" strokeWidth="1" opacity="0.4" fill="none" />
        </g>
      </svg>

      {/* Subtle sparkles */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-amber-200/30 rounded-full blur-sm animate-pulse" style={{ animationDuration: '2s' }} />
      <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-amber-100/40 rounded-full blur-sm animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
      <div className="absolute top-16 right-1/4 w-2 h-2 bg-amber-200/30 rounded-full blur-sm animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
    </div>
  );
};
