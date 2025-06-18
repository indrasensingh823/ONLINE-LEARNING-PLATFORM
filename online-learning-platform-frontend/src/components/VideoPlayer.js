const VideoPlayer = ({ videoUrl }) => (
  <video controls width="640">
    <source src={videoUrl} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default VideoPlayer;