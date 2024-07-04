import { SVGProps } from 'react';

export const RisingArrowImage = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="201"
      height="180"
      viewBox="0 0 201 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      // className="h-full w-full"
    >
      <g clipPath="url(#clip0_389_8942)">
        <path
          d="M126.21 180H85.9531L154.296 31.6172H146.54L186.705 0L201 31.6172H193.72L126.21 180Z"
          fill="url(#paint0_linear_389_8942)"
        />
        <path d="M86.3764 179.97L46.1196 101.679H87.4936L126.633 179.97H86.3764Z" fill="url(#paint1_linear_389_8942)" />
        <path d="M42.2165 180H0L45.6964 101.709H87.0704L42.2165 180Z" fill="url(#paint2_linear_389_8942)" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_389_8942"
          x1="103.114"
          y1="159.882"
          x2="320.537"
          y2="-196.548"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC99FF" />
          <stop offset="1" stopColor="#330066" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_389_8942"
          x1="187.33"
          y1="280.193"
          x2="49.8655"
          y2="87.767"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC99FF" />
          <stop offset="1" stopColor="#330066" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_389_8942"
          x1="66.4383"
          y1="83.8261"
          x2="-24.0444"
          y2="310.979"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC99FF" />
          <stop offset="1" stopColor="#330066" />
        </linearGradient>
        <clipPath id="clip0_389_8942">
          <rect width="201" height="180" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
