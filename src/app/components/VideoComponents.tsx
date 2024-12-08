import React from "react";

const VideoComponents = () => {
  return (
    <video
      className="absolute top-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/hero-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponents;
