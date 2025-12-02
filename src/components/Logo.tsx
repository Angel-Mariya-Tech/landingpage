export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <img
      src="/logo.png"
      alt="Angel Mariya Job Consultancy Logo"
      className={`h-10 w-auto object-contain ${className}`}
    />
  );
};
