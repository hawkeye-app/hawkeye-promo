import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-[30px] md:px-[60px] lg:px-[120px] xl:px-[240px] py-[30px] border-t border-blue-4 flex">
      <svg
        width="31"
        height="20"
        viewBox="0 0 31 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.2896 17.9607L6.40789 7.56281L6.43059 5.80919L16.9858 11.9468L17.4176 11.2041L6.47441 4.84083L6.47441 3.30751L18.0894 10.0488L18.5213 9.30607L6.47441 2.44837L6.47441 0.920997L19.1931 8.15074C20.374 10.58 21.961 12.6975 23.079 14.3987C24.1101 15.9674 24.7423 17.182 24.2896 17.9607Z"
          fill="#707FA4"
        />
        <path
          d="M18.1898 15.9524C17.5696 17.2043 16.3343 18.1139 14.8427 18.2524C12.5539 18.465 10.5261 16.7819 10.3136 14.4931C10.2227 13.5153 10.4775 12.5858 10.9781 11.8243L18.1898 15.9524Z"
          stroke="#707FA4"
          strokeWidth="1.03984"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.6309 15.9725C15.5331 15.8887 16.204 15.1426 16.2977 14.2754L13.3577 12.5917C12.8408 12.9675 12.5295 13.5984 12.5929 14.2809C12.6886 15.3108 13.601 16.0681 14.6309 15.9725Z"
          fill="#707FA4"
        />
      </svg>
      <p className="text-grey-1 text-sm font-jakarta font-bold">
        Hawkeye · Play better & fairer · Hosted on Vercel
      </p>
    </footer>
  );
};
export default Footer;
