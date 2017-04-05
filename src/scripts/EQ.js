const saveEQ = (data) => {
  const dataToWrite = {
    low: data[0],
    lowMid: data[1],
    mid: data[2],
    highMid: data[3],
    high: data[4]
  };
  storage.set('equalizer', dataToWrite, (err) => {
    if (err)
      console.log(err);
  });
}

const getEq = () => {
  return new Promise((resolve, reject)=>{
    storage.get('equalizer', (err, data) => {
      if (err)
        console.log(err);
      const { low, lowMid, mid, highMid, high } = data;
      if (low === undefined || lowMid === undefined || mid === undefined || highMid == undefined || high === undefined){
        resolve([0,0,0,0,0]);
        return;
      }
      resolve(data);
    });
  });
}
