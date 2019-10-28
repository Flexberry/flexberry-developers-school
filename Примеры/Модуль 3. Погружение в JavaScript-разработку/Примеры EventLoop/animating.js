let imgOffset = 0;
let timer = 0;
let prevTimer = 0;

let prevRenderTimer = 0;
let animating = false;

let startAnim = () => {
  timer = performance.now();
  prevTimer = timer;
  prevRenderTimer = timer;
  animating = true;
  anim();
  render();
  //transitionF();
};

let slowFunction = () => {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
};

let anim = () => {
  if (imgOffset < 500) {
    let currentTimer = performance.now();
    let timeResult = currentTimer - prevTimer;
    prevTimer = currentTimer;
    let resElement = document.getElementById('tempRes');
    resElement.innerHTML = `Task time is ${Math.round(timeResult)} ms`;
    train.style.left = ++imgOffset + 'px';
    //slowFunction();
    setTimeout(anim, 0);
  } else {
    let timeResult = performance.now() - timer;
    let resElement = document.getElementById('res');
    resElement.innerHTML = `Total time is ${Math.round(timeResult)} ms`;
    animating = false;
  }
};

let render = () => {
  let currentTimer = performance.now();
  let timeResult = currentTimer - prevRenderTimer;
  prevRenderTimer = currentTimer;
  let resElement = document.getElementById('renderRes');
  resElement.innerHTML = `Render time is ${Math.round(timeResult)} ms`;
  // slowFunction();
  if (animating) {
    requestAnimationFrame(render);
  }
};

let transitionF = () => {
  train.style.transform = 'translateX(1000px)';
  train.style.transition = 'transform 0s ease-in-out';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      train.style.transform = 'translateX(500px)';
      train.style.transition = 'transform 3s ease-in-out';
    });
  });
};

let tra = document.getElementById('train');
tra.addEventListener('click', startAnim);
//train.onclick = transitionF;
