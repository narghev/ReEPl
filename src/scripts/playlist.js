const fs = require('fs');

const saveFile = (data) => {
  const dataToWrite = [];
  for (let i of data){
    dataToWrite.push({name: i.name, path: i.path});
  }
  fs.writeFile(
    'userPlaylists/playlist.json',
    JSON.stringify(dataToWrite),
    (err) => {
      if (err)
        console.error(err);
    }
  )
}

const tryReadingFiles = (files) => {
  let result = true;
  for (let i=0; i < files.length; i++){
    try {
      fs.readFileSync(files[i].path);
    } catch (e) {
      result = false;
    }
  }
  return result;
}

const getPlaylist = () => {
  let result = [];
  let data;
  let parsed;
  try {
    data = fs.readFileSync('userPlaylists/playlist.json', 'utf8');
    parsed = JSON.parse(data);
  } catch(e) {
    return result;
  }
  if (parsed.length === 0 || !tryReadingFiles(parsed)){
    return result;
  }
  result = parsed;
  return result;
}
