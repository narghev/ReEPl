const saveEQ = (data) => {
  const dataToWrite = {low: data[0], mid: data[1], high: data[2]};
  storage.set('equalizer', dataToWrite, (err) => {
    if (err)
      console.log(err);
  });
}

const getEq = () => {
  return new Promise((resolve, reject)=>{
    storage.get('equalizer', (err, data) => {
      console.log(data)
      if (err)
        console.log(err);
      if (data.low === undefined || data.mid === undefined || data.high === undefined){
        resolve([0,0,0]);
        return;
      }
      resolve(data);
    });
  });
}
