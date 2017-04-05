const saveAnimationNumber = (data) => {
  const dataToWrite = data;
  storage.set('animationNumber', dataToWrite, (err) => {
    if (err)
      console.log(err);
  });
}

const getAnimationNumber = () => {
  return new Promise((resolve, reject)=>{
    storage.get('animationNumber', (err, data) => {
      if (err)
        console.log(err);
      if (typeof data !== 'number'){
        resolve(0);
        return;
      }
      resolve(data);
    });
  });
}
