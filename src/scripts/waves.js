let canvas;
let ctx;
let canvasW;
let canvasH;

const initCanvas = () => {
  if (canvas !== undefined)
    return;
  canvas = document.getElementById('backgroundWaves');
  ctx = canvas.getContext('2d');
  ctx.strokeStyle = '#bb1919';
  canvasH = canvas.height;
  canvasW = canvas.width;
  ctxClearInterval = setInterval(()=>{
    ctx.clearRect(0,0,canvasW, canvasH);
  },50);
}

const drawOnCanvas = (depth) => {
  initCanvas();
  depth *= 10;
  console.log(depth)
  ctx.beginPath();
  ctx.moveTo(0, canvasH/2);
  ctx.bezierCurveTo(canvasW/8, (canvasH/2)-depth, 3*canvasW/8, (canvasH/2)+depth, 4*canvasW/8, canvasH/2);
  ctx.moveTo(canvasW/2, canvasH/2);
  ctx.bezierCurveTo(5*canvasW/8, (canvasH/2)-depth, 7*canvasW/8, (canvasH/2)+depth, canvasW, canvasH/2);
  ctx.stroke();
}
