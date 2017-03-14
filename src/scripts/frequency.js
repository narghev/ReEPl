let audio;
let audioContext;
let analyser;
let source;
let freqByteData;
let result;

const initAnalyser = () => {
  audio = document.getElementById('track');
  audioContext = new AudioContext();
  analyser = audioContext.createAnalyser();
  source = audioContext.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioContext.destination);
}

const getAverageFrequency = ()=> {
  if (analyser === undefined){
    return 1;
  }
  freqByteData = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(freqByteData);
  result = 0;
  for (let i = 0; i<freqByteData.length; i++){
    result+=freqByteData[i];
  }
  if (result===0)
    return 1;
  return (result/freqByteData.length);
}

const getFrequencyArray = ()=> {
  if (analyser === undefined){
    return 1;
  }
  freqByteData = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(freqByteData);
  if (!freqByteData[0]){
    return [];
  }
  return freqByteData;
}
