const fs = require('fs');
const storage = require('electron-json-storage');

export const saveOptions = (data) => {
  const dataToWrite = {shuffle: data[0], replay: data[1]};
  storage.set('options', dataToWrite, (err) => {
    if (err)
      console.log(err);
  });
}

export const getOptions = () => {
  return new Promise((resolve, reject)=>{
    storage.get('options', (err, data) => {
      if (err)
        console.log(err);
      if (data.shuffle === undefined || data.replay === undefined){
        resolve([false, false]);
        return;
      }
      resolve(data);
    });
  });
}
