import { useState, useRef } from "react";
import styles from "../styles/landingVideo.module.css"; // Import CSS module

const LandingVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className={styles.videoContainer}>
      {/* Video Element */}
      <video 
        ref={videoRef} 
        className={styles.video} 
        autoPlay 
        loop 
        muted 
        playsInline
        controlsList="nodownload"
        disablePictureInPicture
      >
        <source src={ `/landing/gday.mp4`} />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Button */}
      <button onClick={togglePlayPause} className={styles.playPauseButton}>
        {isPlaying ? (
          <span className={styles.pauseIcon}></span>
        ) : (
          <span className={styles.playIcon}></span>
        )}
      </button>
    </div>
  );
};

export default LandingVideo;
