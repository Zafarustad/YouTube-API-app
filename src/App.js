import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';
import api from './api';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';
import './App.css';



class App extends Component{
  
  componentDidMount(){
    this.onFormSubmit('');
  }
  

  
  constructor(){
    super();
    this.state={
      videos:[],
      selectedVideo: null
    };
  }
 
  onFormSubmit = async (text) => {
    const response = await api.get('/search', {
      params:{
        q: text
      }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };


  onVideoSelect = (video) =>{
      this.setState({selectedVideo: video});
  }
   
 
  render(){
    return(
            <div>
              <SearchBar onFormSubmit={this.onFormSubmit} />
              <div className="ui grid">
              <div className="ui row">
             <div>
               <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div>
                <VideoList 
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos} />
              </div>
              </div>
              </div>
            </div>
            
    );
  }
}

export default App;
