// src/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ src }) => {
  return (
    <video controls src={src} width="100%">
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
