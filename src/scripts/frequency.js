let audio;
let audioContext;
let analyser;
let source;
let freqByteData;
let result;

window.onload = () => {
  audio = document.getElementById('track');
  audioContext = new AudioContext();
  analyser = audioContext.createAnalyser();
  source = audioContext.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioContext.destination);
}

const getAverageFrequency = ()=> {
  freqByteData = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(freqByteData);
  result = 0;
  for (let i = 0; i<freqByteData.length; i++){
    result+=freqByteData[i];
  }
  return (result/freqByteData.length);
}
