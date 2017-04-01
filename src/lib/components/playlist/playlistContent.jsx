import React from 'react';

export const PlaylistContent = ({playlist, clickHandler, deleteClickHandler}) => {
  let content = [];
  let change = true;
  for (let i=0; i < playlist.length; i++){
    let name = "";
    for (let j = 0; j < playlist[i].name.split('.').length-1; j++){
      name+=playlist[i].name.split('.')[j];
    }
    content.push(
      <div key={i} className="playlistContent"
        onClick = { ()=> {
          clickHandler(i, change);
          change = true;
        }}
        style={{
          backgroundColor: (()=>{
            if (i%2 === 0)
              return '#212121';
            return "#424242";
          })()
        }}>
        <p>{ name }</p>
        {/*
        <img src="images/remove.png" onClick = { ()=> {
          change = false;
          deleteClickHandler(i);
        }}
        style={styleImg}
      />*/}
      </div>
    )
  }
  return(
    <div className="songs">
      {
        content
      }
    </div>
  )
}
