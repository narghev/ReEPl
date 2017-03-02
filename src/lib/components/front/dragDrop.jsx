import React from 'react';
import FileFrop from 'react-file-drop';

export default
class DropOnMe extends React.Component {
  dropHandler = (files) => {
    const playlist = [];
    for (let i of files) {
      if (i.name.split('.')[i.name.split('.').length-1] === 'mp3' || i.name.split('.')[i.name.split('.').length-1] === 'wav'){
        playlist.push({
          name: i.name,
          path: i.path
        });
      }
    }
    if (playlist.length === 0){
      playlist.push({
        name: "",
        path: ""
      });
    }
    this.props.filePassFunc(playlist);
  }
  render(){
    return(
        <FileFrop className="dropOnMe" frame={ document } onDrop={ this.dropHandler } />
    )
  }
}
