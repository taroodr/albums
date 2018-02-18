import React, { Component } from 'react'
import { ScrollView } from "react-native"
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  constructor() {
    super()
    this.state = { albums: [] }
  }

  renderAlbums () {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
   )
  }

  componentWillMount () {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ albums: data })
        console.log(this.state.albums)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render () {
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    )
  }
  
}

export default AlbumList