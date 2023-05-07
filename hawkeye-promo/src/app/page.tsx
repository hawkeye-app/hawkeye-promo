"use client"
import Image from "next/image";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import Video from "./components/Video";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start w-full h-full">
      <section className="flex flex-col items-center justify-center gap-[30px] w-[50%] my-[120px]">
        <h1 className="text-white-1 font-calsans text-2xl text-center">
          The ultimate tennis assistant in the palm of your hand
        </h1>
        <p className="text-grey-2 font-medium font-jakarta text-lg text-center">
          Elevate your game to the next level with the power of AI.
        </p>
        <Button label="Join waitlist" />
      </section>
      <section className="flex flex-col items-center justify-center gap-[60px] w-[50%] my-[120px]">
        <div className="flex flex-col items-center justify-center gap-[15px]">
          <h2 className="text-white-1 font-calsans text-xl text-center">
            Features
          </h2>
          <p className="text-grey-2 font-medium font-jakarta text-base text-center">
            A tool for every tennis player, coach or analyst in order to make
            the game better & fairer.
          </p>
        </div>
        <Divider />
      </section>
      <section className="flex flex-col items-center justify-center gap-[60px] w-[50%] my-[120px]">
        <div className="flex flex-col items-center justify-center gap-[15px]">
          <h2 className="text-white-1 font-calsans text-xl text-center">
            Alpha Version
          </h2>
          <p className="text-grey-2 font-medium font-jakarta text-base text-center">
            Every project has its first step. This was the first version,
            developed in 2022.
          </p>
        </div>
        <Divider />
        <Video />
      </section>
      <section className="flex flex-col items-center justify-center gap-[60px] w-[50%] my-[120px]">
        <div className="flex flex-col items-center justify-center gap-[15px]">
          <h2 className="text-white-1 font-calsans text-xl text-center">
            Join Waitlist
          </h2>
          <p className="text-grey-2 font-medium font-jakarta text-base text-center">
            Be ready for the first release.
          </p>
        </div>
        <Divider />
      </section>
      <section className="flex flex-col items-center justify-center gap-[15px] w-[50%] my-[120px]">
        <h2 className="text-white-1 font-calsans text-xl text-center">
          Contact Us
        </h2>
        <p className="text-grey-2 font-medium font-jakarta text-base text-center">
          Don’t be shy to drop us a line, we are open to any concerns, It’s as
          simple as writing to{" "}
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRmVgvGlHDXmgjWRJqPrsqPrKMsBtdQnWZNvdJmXNcwXnvNqNWchqKgppbBkbVkxKQxNnsQ"
            rel="noopener"
            target="_blank"
            className="text-brand-1 hover:underline"
          >
            hawkeye.tennis.app@gmail.com
          </a>
          .
        </p>
      </section>
      <Footer />
    </main>
  );
}
