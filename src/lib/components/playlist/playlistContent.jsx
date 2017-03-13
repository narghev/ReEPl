import React from 'react';

export const PlaylistContent = ({playlist, clickHandler, deleteClickHandler, stylesP, styleImg}) => {
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
              return 'rgb(82, 82, 82)';
            return '#191919';
          })()
        }}>
        <p style={stylesP}>{ name }</p>
        <img src="images/delete.png" onClick = { ()=> {
          change = false;
          deleteClickHandler(i);
        }}
        style={styleImg}
        />
      </div>
    )
  }
  return(
    <div style={{overflowY: 'scroll', overflowX: 'hidden', marginTop: '4vh'}}>
      {
        content
      }
    </div>
  )
}
