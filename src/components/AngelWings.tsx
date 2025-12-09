import angelWingsImage from "@/assets/angel-wings.png";

export const AngelWings = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Angel Wings Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={angelWingsImage}
          alt=""
          className="w-full h-full object-cover opacity-40 md:opacity-50 lg:opacity-60"
        />
      </div>

      {/* Divine glow overlay at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[200px] md:h-[300px] bg-gradient-to-b from-amber-100/20 via-amber-50/10 to-transparent" />

      {/* Subtle sparkles */}
      <div className="absolute top-16 md:top-20 left-1/4 w-1.5 md:w-2 h-1.5 md:h-2 bg-amber-300/50 rounded-full blur-sm animate-pulse" style={{ animationDuration: '2s' }} />
      <div className="absolute top-24 md:top-32 right-1/3 w-1 md:w-1.5 h-1 md:h-1.5 bg-amber-200/60 rounded-full blur-sm animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
      <div className="absolute top-12 md:top-16 right-1/4 w-1.5 md:w-2 h-1.5 md:h-2 bg-amber-300/50 rounded-full blur-sm animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
    </div>
  );
};
