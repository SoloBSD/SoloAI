import React from 'react';
interface SoloAILogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}
export const SoloAILogo: React.FC<SoloAILogoProps> = ({ className, ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
        className="fill-primary"
      />
      <path
        d="M13.136 23.2L18.864 8.80005H21.2L15.472 23.2H13.136Z"
        className="fill-primary-foreground"
      />
      <path
        d="M10.8 23.2L16.528 8.80005H14.192L8.46401 23.2H10.8Z"
        className="fill-primary-foreground opacity-70"
      />
    </svg>
  );
};