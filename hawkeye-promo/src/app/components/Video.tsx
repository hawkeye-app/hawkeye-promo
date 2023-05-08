import { useRef, useEffect } from "react";

const Video: React.FC = () => {
  const video = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvas.current) {
      canvas.current.style.width = video.current?.clientWidth + "px";
      canvas.current.style.height = video.current?.clientHeight + "px";
    }

    const ctx = canvas.current?.getContext("2d");
    const getCurrentImage = () => {
      ctx?.drawImage(
        video.current!,
        0,
        0,
        canvas.current?.width!,
        canvas.current?.height!
      );
    };
    setInterval(getCurrentImage, 100);
  }, []);

  return (
    <div className="relative">
      <video
        ref={video}
        poster="/images/hawkeye-thumbnail.png"
        src="/video/hawkeye-alpha.mp4"
        controls
        className="relative z-10 border border-blue-4 rounded-md"
      ></video>
      <canvas
        ref={canvas}
        className="rounded-md blur-[50px] absolute z-0 top-0 opacity-50 transition-all ease-in-out duration-150 select-none"
      ></canvas>
    </div>
  );
};
export default Video;
