let context;
let hBand;
let hInvert;
let hmBand;
let hmInvert;
let mBand;
let lmBand;
let lmInvert;
let lBand;
let lInvert;
let lGain;
let lmGain;
let mGain;
let hmGain;
let hGain;
let sum;

const gainDb = -40.0;
const bandSplit = [360, 990, 2970, 3600];

const initEqualizer = () =>{
  sourceNode = source;
  context = audioContext;

  hBand = context.createBiquadFilter();
  hBand.type = "lowshelf";
  hBand.frequency.value = bandSplit[0];
  hBand.gain.value = gainDb;

  hInvert = context.createGain();
  hInvert.gain.value = -1.0;

  hmBand = context.createBiquadFilter();
  hmBand.type = "lowshelf";
  hmBand.frequency.value = bandSplit[1];
  hmBand.gain.value = gainDb;

  hmInvert = context.createGain();
  hmInvert.gain.value = -1.0;

  mBand = context.createGain();

  lmBand = context.createBiquadFilter();
  lmBand.type = "highshelf";
  lmBand.frequency.value = bandSplit[2];
  lmBand.gain.value = gainDb;

  lmInvert = context.createGain();
  lmInvert.gain.value = -1.0;

  lBand = context.createBiquadFilter();
  lBand.type = "highshelf";
  lBand.frequency.value = bandSplit[3];
  lBand.gain.value = gainDb;

  lInvert = context.createGain();
  lInvert.gain.value = -1.0;

  sourceNode.connect(lBand);
  sourceNode.connect(lmBand);
  sourceNode.connect(mBand);
  sourceNode.connect(hmBand);
  sourceNode.connect(hBand);

  hBand.connect(hInvert);
  hmBand.connect(hmInvert);
  lBand.connect(lInvert);
  lmBand.connect(lmInvert);

  hInvert.connect(mBand);
  hmInvert.connect(mBand);
  lInvert.connect(mBand);
  lmInvert.connect(mBand);

  lGain = context.createGain();
  lmGain = context.createGain();
  mGain = context.createGain();
  hmGain = context.createGain();
  hGain = context.createGain();

  lBand.connect(lGain);
  lmBand.connect(lmGain);
  mBand.connect(mGain);
  hmBand.connect(hmGain);
  hBand.connect(hGain);

  sum = context.createGain();
  lGain.connect(sum);
  lmGain.connect(sum);
  mGain.connect(sum);
  hmGain.connect(sum);
  hGain.connect(sum);

  lGain.gain.value = 0;
  lmGain.gain.value = 0;
  mGain.gain.value = 0;
  hmGain.gain.value = 0;
  hGain.gain.value = 0;
}

const connectEqualizer = () => {
  sum.connect(context.destination);
}

const disconnectEqualizer = () => {
  sum.disconnect(context.destination);
}

const changeGain = (string,type) => {
  let value = parseFloat(string) / 100.0;

  switch(type){
    case 'lowGain': lGain.gain.value = value; break;
    case 'lowMidGain': lmGain.gain.value = value; break;
    case 'midGain': mGain.gain.value = value; break;
    case 'highMidGain': hmGain.gain.value = value; break;
    case 'highGain': hGain.gain.value = value; break;
  }
}
