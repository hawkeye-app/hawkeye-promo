import React from "react";
import GithubIcon from "./GithubIcon";
import InstagramIcon from "./InstagramIcon";
import LinkedinIcon from "./LinkedinIcon";

//after:block after:fixed after:z-10 after:w-[50%] after:h-[50px] after:bg-brand-1

const Header: React.FC = () => {
  return (
    <>
      <span className="bg-gradient-to-r from-[#195849] via-[#2f3a6e] to-[#1b573b] blur-[100px] opacity-90 left-[25%] fixed top-[30px] z-10 w-[50%] h-[60px]"></span>
      <header className="z-20 flex justify-between fixed top-0 w-full px-[30px] md:px-[60px] lg:px-[120px] xl:px-[240px] py-[15px] border-b border-blue-4 backdrop-blur-[35px] bg-blue-1/50">
        <div className="flex gap-[60px] items-center justify-start">
          <a href="#">
            <svg
              width="101"
              height="16"
              viewBox="0 0 101 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12.2379H18V10.4903H0.819174L0 12.2379Z"
                fill="#E0E5F3"
              />
              <path
                d="M1.67114 8.74268H18V6.9951H2.50124L1.67114 8.74268Z"
                fill="#E0E5F3"
              />
              <path
                d="M3.32039 5.24763H18V3.50006H4.01942L3.32039 5.24763Z"
                fill="#E0E5F3"
              />
              <path
                d="M28.124 12.5H26.216V9.116H22.82V12.5H20.924V3.992H22.82V7.328H26.216V3.992H28.124V12.5ZM35.6592 12.5L35.0472 10.772H31.7592L31.1472 12.5H29.1552L32.3592 3.992H34.5552L37.7232 12.5H35.6592ZM33.4272 6.104L32.3832 9.044H34.4472L33.4272 6.104ZM46.3795 9.452L47.7595 3.992H49.7035L47.3875 12.5H45.4315L43.6195 6.86L41.7955 12.5H39.8035L37.4875 3.992H39.5035L40.9075 9.44L42.6715 3.992H44.6155L46.3795 9.452ZM55.8962 12.5L53.6042 9.152L52.6442 10.22V12.5H50.7482V3.992H52.6442V7.568L55.7522 3.992H58.2482L54.9362 7.676L58.2602 12.5H55.8962ZM64.7029 12.5H59.3029V3.992H64.6909V5.78H61.1989V7.4H64.3669V9.068H61.1989V10.7H64.7029V12.5ZM68.5525 8.948L65.6005 3.992H67.8205L69.5605 7.148L71.3245 3.992H73.4365L70.4485 8.948V12.5H68.5525V8.948ZM79.8787 12.5H74.4787V3.992H79.8667V5.78H76.3747V7.4H79.5427V9.068H76.3747V10.7H79.8787V12.5Z"
                fill="#E0E5F3"
              />
              <path
                d="M83 12.24H96.9839L97.6831 10.492H83V12.24Z"
                fill="#E0E5F3"
              />
              <path
                d="M83 8.74402H98.437L99.1799 6.99603H83V8.74402Z"
                fill="#E0E5F3"
              />
              <path
                d="M83 5.24805H99.9009L100.655 3.50005H83V5.24805Z"
                fill="#E0E5F3"
              />
            </svg>
          </a>
          <nav className="flex gap-[15px]">
            <a
              href="#features"
              className="text-grey-2 font-jakarta font-medium text-sm transition-all ease-in-out duration-200 hover:text-white-1"
            >
              Features
            </a>
            <a
              href="#alpha"
              className="text-grey-2 font-jakarta font-medium text-sm transition-all ease-in-out duration-200 hover:text-white-1"
            >
              Alpha
            </a>
            <a
              href="#waitlist"
              className="text-grey-2 font-jakarta font-medium text-sm transition-all ease-in-out duration-200 hover:text-white-1"
            >
              Waitlist
            </a>
            <a
              href="#contact"
              className="text-grey-2 font-jakarta font-medium text-sm transition-all ease-in-out duration-200 hover:text-white-1"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex gap-[15px] items-center">
          <p className="text-grey-2 font-jakarta font-medium text-sm">
            Toggle Language
          </p>
          <span className="bg-blue-4 w-[1px] h-[16px]"></span>
          <div className="flex gap-[10px] items-center">
            <p className="font-jakarta text-sm font-bold text-grey-2">
              Follow us on
            </p>
            <a
              href="https://github.com/Hawkeye-App"
              rel="noopener"
              target="_blank"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.instagram.com/hawkeye.app/"
              rel="noopener"
              target="_blank"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/hawkeye-app/"
              rel="noopener"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
