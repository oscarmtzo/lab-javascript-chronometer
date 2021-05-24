const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');
let intervalIdd = 0
let intervalD1 = 0
function printTime() {
  // ... your code goes here
  intervalIdd = setInterval(() => {
    //console.log(`${printMinutes()}:${printSeconds()}`)
    secDec.innerHTML = printSeconds()[0]
    secUni.innerHTML = printSeconds()[1]
    minDec.innerHTML = printMinutes()[0]
    minUni.innerHTML = printMinutes()[1]
  }, 1000);
  intervalD1 = setInterval(() => {
    milDec.innerHTML = printMilliseconds()[0]
    milUni.innerHTML = printMilliseconds()[1]
  }, 100);
}

function printMinutes() {
  // ... your code goes here
  return chronometer.twoDigitsNumber(chronometer.getMinutes())
  

}

function printSeconds() {
  // ... your code goes here
  return chronometer.twoDigitsNumber(chronometer.getSeconds())
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  return chronometer.twoDigitsNumber(chronometer.getMili())
}

function printSplit() {
  // ... your code goes here
  let li = document.createElement('li')
  li.innerHTML = chronometer.splitClick(chronometer.getMinutes(), chronometer.getSeconds(), chronometer.getMili())
  splits.appendChild(li)
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = ''
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.setAttribute('class', 'btn start')
  btnLeft.innerHTML = 'START'
  btnRight.setAttribute('class', 'btn reset')
  btnRight.innerHTML = 'RESET'
  //stopClick method
  chronometer.stopClick()
  clearInterval(intervalIdd)
}

function setSplitBtn() {
  // ... your code goes here
  printSplit()
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.setAttribute('class', 'btn stop')
  btnLeft.innerHTML = 'STOP'
  btnRight.setAttribute('class', 'btn split')
  btnRight.innerHTML = 'SPLIT'
  //startClick method
  chronometer.startClick()
  printTime()
}

function setResetBtn() {
  // ... your code goes here
  setStopBtn()
  secDec.innerHTML = 0
  secUni.innerHTML = 0
  minDec.innerHTML = 0
  minUni.innerHTML = 0
  chronometer.resetClick()
  clearSplits()
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeft.className.includes('start')){
    setStartBtn()

  }else if (btnLeft.className.includes('stop')){
    setStopBtn()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if(btnRight.className.includes('split')){
    setSplitBtn()
  }else if (btnRight.className.includes('reset')){
    setResetBtn()
  }
});
