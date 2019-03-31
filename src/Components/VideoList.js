import React from 'react';
import VideoItem from './VideoItem';
import './style.css';

const VideoList = ({ onVideoSelect, videos }) =>{
    
    const renderedList = videos.map((video) => {
        return <VideoItem className="ui" key={video.id.VideoId} onVideoSelect={onVideoSelect} video={video} />
    })
    
    return <div className="ui relaxed divided list">{renderedList}</div>;
          
}

export default VideoList;