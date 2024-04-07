// src/pages/VideoPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import VideoCapture from '../components/VideoCapture'; // Import the VideoCapture component

const VideoPage = () => {
  let { id } = useParams();
  
  // Placeholder for fetching video details by ID
  const videoSrc = 'path/to/your/video.mp4';

  return (
    <div>
      {/* Conditional rendering based on whether an ID is provided.
          If an ID is provided, render the VideoPlayer, otherwise the VideoCapture component. */}
      {id ? (
        <VideoPlayer src={videoSrc} />
      ) : (
        <div>
          <h2>Record Your Video</h2>
          <VideoCapture />
        </div>
      )}
    </div>
  );
};

export default VideoPage;
