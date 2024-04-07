// Example structure, adapt based on your actual data model and requirements
const videos = [
    { id: 1, title: 'Video Title 1', src: 'path/to/video1.mp4' },
    { id: 2, title: 'Video Title 2', src: 'path/to/video2.mp4' },
    // Add more videos as needed
  ];
  
  const VideoList = () => {
    return (
      <div>
        {videos.map((video) => (
          <div key={video.id}>
            <h3>{video.title}</h3>
            {/* Thumbnail or link to the video page */}
            <a href={`/video/${video.id}`}>Watch</a>
          </div>
        ))}
      </div>
    );
  };
  
  export default VideoList;
  