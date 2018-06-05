import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [{
        name: 'a',
        artist:'a',
        album:'a',
        id:'a'
      },{
        name:'b',
        artist:'b',
        album:'b',
        id:'b'
      },{
        name:'c',
        artist:'c',
        album:'c',
        id:'c'
      }],
      playlistName: 'New Stuff',
      playlistTracks: [{
        name: 'a',
        artist:'a',
        album:'a',
        id:'a'
      },{
        name:'b',
        artist:'b',
        album:'b',
        id:'b'
      },{
        name:'c',
        artist:'c',
        album:'c',
        id:'c'
      }]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  };

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      let tracks = this.state.playlistTracks.concat(track);
      this.setState = ({playlistTracks: tracks});
    }
  }
  removeTrack(track){
    let newTracks = this.tracks.filter(playlistTrack => playlistTrack.id !== track.id)
    this.setState({playlistTrack: newTracks});
  }
  updatePlaylistName(name){
    this.setState({playlistName: name});
  }
  savePlaylist(){
    
  }
  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults} />
            <Playlist onNameChange={this.updatePlaylistName} onRemove={this.onRemove} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
