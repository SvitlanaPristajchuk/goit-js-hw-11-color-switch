const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

 // const randomIntegerFromInterval = (min, max) => {
  //  return Math.floor(Math.random() * (max - min + 1) + min);
  //};
  
  const refs= {
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
    body: document.body,
  }

  const INTERVAL_DELAY = 1000;
  let intervalId = null;

  refs.start.addEventListener('click', changeColor);
  refs.stop.addEventListener ('click', onStopChangeColor);


  const randomIntegerFromInterval = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function changeColor (){
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, INTERVAL_DELAY);
    refs.start.disabled = true;
};

function onStopChangeColor (){
  clearInterval(intervalId);
  refs.start.disabled = false;
}

