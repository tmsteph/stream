// src/components/VideoCapture.js
import React, { useEffect, useRef } from 'react';

const VideoCapture = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Request access to the webcam
    const getVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing the webcam: ", err);
      }
    };

    getVideo();
  }, [videoRef]);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default VideoCapture;
