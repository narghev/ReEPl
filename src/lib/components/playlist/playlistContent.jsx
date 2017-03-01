import React from 'react';

export default
class PlaylistContent extends React.Component {
  constructor(){
    super();
    this.content = new Array();
  }
  render(){
    this.content = [];
    for (let i=0; i<this.props.playlist.length; i++){
        this.content.push(
          <div key={i} className="playlistContent"
            onClick = { ()=> {
              this.props.clickHandler(i);
            }}
            style={{
              backgroundColor: (()=>{
                if (i%2 === 0)
                  return 'rgb(82, 82, 82)';
                return '#191919';
              })()
            }}>
            <p>{this.props.playlist[i].name.split('.')[0]}</p>
            <img src="images/delete.png" onClick = { ()=> {
              this.props.deleteClickHandler(i);
            }}/>
          </div>
        )
    }
    return(
      <div>
        {
          this.content
        }
      </div>
    )
  }
}
