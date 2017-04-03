let context;
let hBand;
let hInvert;
let mBand;
let lBand;
let lInvert;
let lGain;
let mGain;
let hGain;
let sum;

const gainDb = -40.0;
const bandSplit = [360,3600];

const initEqualizer = () =>{
  sourceNode = source;
  context = audioContext;

  hBand = context.createBiquadFilter();
  hBand.type = "lowshelf";
  hBand.frequency.value = bandSplit[0];
  hBand.gain.value = gainDb;

  hInvert = context.createGain();
  hInvert.gain.value = -1.0;

  mBand = context.createGain();

  lBand = context.createBiquadFilter();
  lBand.type = "highshelf";
  lBand.frequency.value = bandSplit[1];
  lBand.gain.value = gainDb;

  lInvert = context.createGain();
  lInvert.gain.value = -1.0;

  sourceNode.connect(lBand);
  sourceNode.connect(mBand);
  sourceNode.connect(hBand);

  hBand.connect(hInvert);
  lBand.connect(lInvert);

  hInvert.connect(mBand);
  lInvert.connect(mBand);

  lGain = context.createGain();
  mGain = context.createGain();
  hGain = context.createGain();

  lBand.connect(lGain);
  mBand.connect(mGain);
  hBand.connect(hGain);

  sum = context.createGain();
  lGain.connect(sum);
  mGain.connect(sum);
  hGain.connect(sum);
}

const connectEquilizer = () => {
  sum.connect(context.destination);
}

const disconnectEquilizer = () => {
  sum.disconnect(context.destination);
}

const changeGain = (string,type) => {
  let value = parseFloat(string) / 100.0;

  switch(type){
    case 'lowGain': lGain.gain.value = value; break;
    case 'midGain': mGain.gain.value = value; break;
    case 'highGain': hGain.gain.value = value; break;
  }
}
