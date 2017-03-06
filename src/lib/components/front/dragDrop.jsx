import React from 'react';
import FileFrop from 'react-file-drop';

export const DropOnMe = ({filePassFunc}) => {
  const dropHandler = (files) => {
    const playlist = [];
    for (let i of files) {
      const array = i.name.split('.');
      if (array[array.length-1].toLowerCase() === 'mp3' || array[array.length-1].toLowerCase() === 'wav'){
        playlist.push({
          name: i.name,
          path: i.path
        });
      }
    }
    filePassFunc(playlist);
  }
  return(
      <FileFrop className="dropOnMe" frame={ document } onDrop={ dropHandler } />
  )
}
