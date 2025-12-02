export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_102_2)">
        <path
          d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14V28H14C6.26801 28 0 21.732 0 14Z"
          fill="#D4F102"
        />
        <path
          d="M14 0C6.26801 0 0 6.26801 0 14H14V0Z"
          fill="#14B076"
        />
      </g>
      <defs>
        <clipPath id="clip0_102_2">
          <rect fill="white" height="28" width="28" />
        </clipPath>
      </defs>
    </svg>
  );
};
