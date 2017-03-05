import React from 'react';
import FileFrop from 'react-file-drop';

export const DropOnMe = ({filePassFunc}) => {
  const dropHandler = (files) => {
    const playlist = [];
    for (let i of files) {
      const array = i.name.split('.');
      if (array[array.length-1] === 'mp3' || array[array.length-1] === 'wav'){
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
    filePassFunc(playlist);
  }
  return(
      <FileFrop className="dropOnMe" frame={ document } onDrop={ dropHandler } />
  )
}
