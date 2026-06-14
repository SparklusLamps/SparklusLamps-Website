import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPlay, FaVolumeUp, FaExpand } from "react-icons/fa";
import { craftsmanshipVideo } from "../../constants";
import "./CraftsmanshipVideo.css";

const formatTime = (seconds) => {
  if (!seconds || Number.isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const CraftsmanshipVideo = ({ embedded = false, sectionHeading = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showPoster, setShowPoster] = useState(true);

  const {
    label,
    title,
    description,
    buttonText,
    videoDuration,
    videoSrc,
    posterImages,
  } = craftsmanshipVideo;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setShowPoster(true);
    };
    const handlePlay = () => {
      setIsPlaying(true);
      setShowPoster(false);
    };
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    setShowPoster(false);
    video.play();
  };

  const handleProgressClick = (e) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    video.currentTime = ratio * duration;
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;
  const displayDuration = duration ? formatTime(duration) : videoDuration;

  const sectionClass = embedded
    ? "craftsmanship-video-section craftsmanship-video-embedded"
    : "craftsmanship-video-section";

  return (
    <section
      className={sectionClass}
      id={embedded ? "production" : "craftsmanship"}
    >
      <div className="container">
        {embedded && sectionHeading && (
          <motion.div
            className="section-title craftsmanship-section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2>{sectionHeading}</h2>
          </motion.div>
        )}

        <motion.div
          ref={ref}
          className="craftsmanship-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: embedded ? 0.1 : 0 }}
        >
          <div className="craftsmanship-content">
            <span className="craftsmanship-label">{label}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <button
              type="button"
              className="craftsmanship-cta"
              onClick={handlePlay}
            >
              {buttonText}
              <span className="cta-play-icon">
                <FaPlay />
              </span>
            </button>
          </div>

          <div className="craftsmanship-player">
            <div className="player-frame">
              {showPoster && (
                <div className="player-poster">
                  <div className="poster-collage">
                    {posterImages.map((image, index) => (
                      <img
                        key={image}
                        src={image}
                        alt={`Craftsmanship step ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              <video
                ref={videoRef}
                className="player-video"
                src={videoSrc}
                playsInline
                preload="metadata"
              />

              {!isPlaying && (
                <button
                  type="button"
                  className="player-play-overlay"
                  onClick={handlePlay}
                  aria-label="Play video"
                >
                  <FaPlay />
                </button>
              )}

              <div className="player-controls">
                <span className="control-time">{formatTime(currentTime)}</span>
                <div
                  className="control-progress"
                  onClick={handleProgressClick}
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="control-progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                  <span
                    className="control-progress-thumb"
                    style={{ left: `${progress}%` }}
                  />
                </div>
                <span className="control-duration">{displayDuration}</span>
                <button
                  type="button"
                  className="control-icon-btn"
                  aria-label="Volume"
                >
                  <FaVolumeUp />
                </button>
                <button
                  type="button"
                  className="control-icon-btn"
                  onClick={handleFullscreen}
                  aria-label="Fullscreen"
                >
                  <FaExpand />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CraftsmanshipVideo;
