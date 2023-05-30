import React from "react";
import { motion } from "framer-motion";

const HawkeyeIcon: React.FC = () => {
  return (
    <>
      <div className="flex mb-[30px]">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="z-[-200] bg-gradient-to-b from-brand-1 to-[#1A0B45] rounded-[3px] w-[128px] h-[128px] absolute blur-[35px]"
        ></motion.div>
        <div className="z-[-100] border border-l-blue-4 border-t-blue-4 border-b-[#161A2B] border-r-[#161A2B] w-[128px] h-[128px] bg-blue-1 rounded-md flex items-center justify-center">
          <svg
            width="77"
            height="60"
            viewBox="0 0 77 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M66.911 55.4859L9.6896 22.2128L9.76224 16.6012L43.5388 36.2416L44.9208 33.8649L9.90245 13.5024L9.90245 8.59582L47.0705 30.1679L48.4525 27.7912L9.90245 5.84655L9.90245 0.958971L50.6023 24.0942C54.381 31.8678 59.4594 38.6438 63.0373 44.0875C66.3366 49.1074 68.3598 52.9943 66.911 55.4859Z"
              fill="#4ECB71"
            />
            <path
              d="M22.1876 44.3895C21.897 41.2605 22.7121 38.2861 24.3142 35.8493L47.3915 49.0591C45.4068 53.0654 41.4541 55.976 36.6809 56.4193C29.3568 57.0996 22.8679 51.7137 22.1876 44.3895Z"
              stroke="#4ECB71"
              strokeWidth="3.32749"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.0031 49.1237C38.89 48.8556 41.037 46.468 41.3369 43.6929L31.9287 38.3052C30.2747 39.5078 29.2788 41.5267 29.4816 43.7107C29.7877 47.0063 32.7075 49.4298 36.0031 49.1237Z"
              fill="#4ECB71"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
export default HawkeyeIcon;
