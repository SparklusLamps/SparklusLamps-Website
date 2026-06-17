import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPlay } from "react-icons/fa";
import { craftsmanshipVideo } from "../../constants";
import {
  getYouTubeVideoId,
  getYouTubeEmbedUrl,
  getYouTubeThumbnail,
} from "../../utils/youtube";
import "./CraftsmanshipVideo.css";

const VerticalVideo = ({ youtubeUrl, youtubeId, poster, ariaLabel, title }) => {
  const videoId = youtubeId || getYouTubeVideoId(youtubeUrl);
  const [isActive, setIsActive] = useState(false);
  const thumbnail = poster || (videoId ? getYouTubeThumbnail(videoId) : null);

  return (
    <div className="production-video">
      <div
        className={`production-video-inner${
          isActive ? " is-active" : " has-poster"
        }`}
      >
        {isActive && videoId ? (
          <iframe
            className="production-video-iframe"
            src={getYouTubeEmbedUrl(videoId, { autoplay: true })}
            title={ariaLabel || title || "YouTube video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <>
            {thumbnail ? (
              <img
                className="production-video-poster"
                src={thumbnail}
                alt=""
                aria-hidden="true"
              />
            ) : (
              <div className="production-video-placeholder" aria-hidden="true" />
            )}

            <button
              type="button"
              className="production-video-play"
              onClick={() => videoId && setIsActive(true)}
              disabled={!videoId}
              aria-label={
                videoId ? "Play video" : "YouTube video link not configured"
              }
            >
              <FaPlay />
            </button>

            {!videoId && (
              <p className="production-video-missing">
                Add a YouTube link in constants
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const EmbeddedProductionSection = ({ section }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { heading, label, description, videos } = section;

  return (
    <section
      className="craftsmanship-video-section craftsmanship-video-embedded"
      id="production"
    >
      <div className="container">
        <motion.div
          ref={ref}
          className="production-three-col"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="production-copy">
            <span className="production-label">{label}</span>
            <h2 className="production-heading">{heading}</h2>
            <p className="production-description">{description}</p>
          </div>

          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="production-video-col"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 + index * 0.1 }}
            >
              <VerticalVideo
                youtubeUrl={video.youtubeUrl}
                youtubeId={video.youtubeId}
                poster={video.poster}
                ariaLabel={video.ariaLabel}
                title={video.title}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const StandaloneCraftsmanshipVideo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { label, title, description, buttonText, youtubeUrl, youtubeId, poster } =
    craftsmanshipVideo;

  const videoId = youtubeId || getYouTubeVideoId(youtubeUrl);
  const [isActive, setIsActive] = useState(false);
  const thumbnail =
    poster || (videoId ? getYouTubeThumbnail(videoId) : null);

  const handlePlay = () => {
    if (videoId) setIsActive(true);
  };

  return (
    <section className="craftsmanship-video-section" id="craftsmanship">
      <div className="container">
        <motion.div
          ref={ref}
          className="craftsmanship-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="craftsmanship-content">
            <span className="craftsmanship-label">{label}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <button
              type="button"
              className="craftsmanship-cta"
              onClick={handlePlay}
              disabled={!videoId}
            >
              {buttonText}
              <span className="cta-play-icon">
                <FaPlay />
              </span>
            </button>
          </div>

          <div className="craftsmanship-player">
            <div
              className={`player-frame${isActive ? " is-active" : ""}${
                !isActive && thumbnail ? " has-poster" : ""
              }`}
            >
              {isActive && videoId ? (
                <iframe
                  className="player-youtube-iframe"
                  src={getYouTubeEmbedUrl(videoId, { autoplay: true })}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <>
                  {thumbnail ? (
                    <img
                      className="player-youtube-poster"
                      src={thumbnail}
                      alt=""
                      aria-hidden="true"
                    />
                  ) : (
                    <div className="player-youtube-placeholder" aria-hidden="true" />
                  )}

                  <button
                    type="button"
                    className="player-play-overlay"
                    onClick={handlePlay}
                    disabled={!videoId}
                    aria-label={videoId ? "Play video" : "YouTube link not configured"}
                  >
                    <FaPlay />
                  </button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CraftsmanshipVideo = ({ embedded = false, section = null }) => {
  if (embedded && section) {
    return <EmbeddedProductionSection section={section} />;
  }

  return <StandaloneCraftsmanshipVideo />;
};

export default CraftsmanshipVideo;
