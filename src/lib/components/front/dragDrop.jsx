import React from 'react';
import FileFrop from 'react-file-drop';

export default
class DropOnMe extends React.Component {
  dropHandler = (files) => {
    this.props.filePassFunc(files);
  }
  render(){
    return(
        <FileFrop className="dropOnMe" frame={ document } onDrop={ this.dropHandler } />
    )
  }
}
