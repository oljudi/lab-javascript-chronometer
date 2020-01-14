class Chronometer {
  constructor() {
    this.currentTime =0 ,
    this.intervalId =0
  }
  startClick() {
    this.intervalId=setInterval(()=>{
      this.currentTime++
    },1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    // return Math.floor(this.currentTime / 1000)
    return this.currentTime % 60
  }
  getMilis() {
    //return this.currentTime 
  }
  twoDigitsNumber(x) {
    return x.toString().padStart(2,'0')
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    return this.twoDigitsNumber(this.getMinutes()) + ':' + this.twoDigitsNumber(this.getSeconds())
  }
}