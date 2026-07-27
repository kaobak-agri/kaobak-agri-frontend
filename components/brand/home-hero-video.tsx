"use client";

import { useEffect, useRef } from "react";

const HERO_VIDEO_SPEED = 0.5;

function setPlaybackSpeed(video: HTMLVideoElement) {
  video.defaultPlaybackRate = HERO_VIDEO_SPEED;
  video.playbackRate = HERO_VIDEO_SPEED;
}

export function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      setPlaybackSpeed(video);
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/images/kaobak-home-hero.png"
      aria-hidden="true"
      tabIndex={-1}
      className="hero-media absolute inset-0 size-full object-cover brightness-[0.86] contrast-[1.05] saturate-[1.04]"
      onLoadedMetadata={(event) => setPlaybackSpeed(event.currentTarget)}
      onPlay={(event) => setPlaybackSpeed(event.currentTarget)}
    >
      <source
        src="https://res.cloudinary.com/dmot064z/video/upload/q_auto/Homepage_Background_video_moxcld.mp4"
        type="video/mp4"
      />
    </video>
  );
}
