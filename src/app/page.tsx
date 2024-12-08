"use client";

import HeroContents from "./components/HeroContents";
import Navbar from "./components/Navbar";
import VideoComponents from "./components/VideoComponents";
export default function Home() {
  return (
    <>
      <div className="relative h-screen flex flex-col">
        <div className="relative flex-grow flex items-center justify-center overflow-hidden mb-5 sm:mb-8">
          <VideoComponents />
          <HeroContents />
        </div>
      </div>
    </>
  );
}
