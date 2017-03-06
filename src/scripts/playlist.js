const fs = require('fs');
const storage = require('electron-json-storage');

const saveFile = (data) => {
  const dataToWrite = [];
  for (let i of data){
    dataToWrite.push({name: i.name, path: i.path});
  }
  storage.set('playlist', dataToWrite, (err) => {
    if (err)
      console.log(err);
  });
}

const getPlaylist = () => {
  return new Promise((resolve, reject)=>{
    storage.get('playlist', (err, data) => {
      if (err)
        console.log(err);
      resolve(data);
    });
  });
}

const checkPlaylist = (playlist) => {
  let result = true;
  if (playlist.length === 0){
    return false;
  }
  for (let i=0; i < playlist.length; i++){
    try {
      fs.readFileSync(playlist[i].path);
    } catch (e) {
      result = false;
    }
  }
  return result;
}
