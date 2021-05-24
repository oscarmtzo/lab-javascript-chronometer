class Chronometer {
  constructor() {
    this.currentTime =0;
    this.intervalId = 0;
    this.miliTime = 0;
    this.miliTimeIntervalId = 0;
    // ... your code goes here
  }
  startClick(callback) {
    if(!callback){
      this.intervalId = setInterval(() => {
        this.currentTime++
      }, 1000);
      this.miliTimeIntervalId = setInterval(() => {
        this.miliTime++
      }, 1);
    }
    // this.intervalId = setInterval(()=>{
    //   this.currentTime++},1000)
    
  }
  getMinutes() {
    
    return minutes(this.currentTime)
    // ... your code goes here
  }
  getSeconds() {
    return seconds(this.currentTime)
    // ... your code goes here
  }
  getMili(){
    return seconds(this.miliTime)
  }
  twoDigitsNumber(tiempo) {
    let string
    if(tiempo<10){
      string = `0${tiempo}`
    }else if(tiempo>9){
      string = `${tiempo}`
    }
    return string;
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId)
    clearInterval(this.miliTimeIntervalId)
  }
  resetClick() {
    this.currentTime = 0
    this.miliTime = 0
    // ... your code goes here
  }
  splitClick(minutes, seconds, mili) {
    
    if(minutes <10 && seconds <10){
      if(mili<10){
        return `0${minutes}:0${seconds}:0${mili}`
      }else if(mili>10){
        return `0${minutes}:0${seconds}:${mili}`
      }
    }else if(minutes<10 && seconds>10){
      if(mili<10){
        return `0${minutes}:${seconds}:0${mili}`
      }else if(mili>10){
        return `0${minutes}:${seconds}:${mili}`
      }
    }else if(minutes>10 && seconds<10){
      if(mili<10){
        return `${minutes}:0${seconds}:0${mili}`
      }else if(mili>10){
        return `${minutes}:0${seconds}:${mili}`
      }
    }else{
      return `00:00:00`
    }
    // ... your code goes here
  }
}

function minutes(time){
  let minutes = time/60 //decimal minutes
  minutes = Math.floor(minutes)
  return minutes
}

function seconds (time){
  if((time%60)!== 0 && time>=60){
      
    let minutesRaw = time/60
    let minutes = Math.floor(minutesRaw)
    let seconds = minutesRaw - minutes 
    seconds*=60
    seconds = Math.floor(seconds)
    return seconds
  }else if (time<60){
    return time
  }else{
    return 0
  }
}