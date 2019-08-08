let balls=0
let strikes=0
export const strike = () => {
    
    strikes = strikes + 1;
    checkMax()
}
export const ball = () => {
  balls = balls + 1;
  checkMax()
}
 const checkMax = () => {
    if(strikes >= 3){
        balls = 0
        strikes = 0
    } else if (balls >= 4){
       balls = 0
       strikes = 0
    }
 }