function solution(number){
    let sum = 0
    for (let step = number; step > 0; step--) {
      if(step < 10 ) {
        sum += step % 3 === 0 || step % 5 === 0 ? step : 0
      }
    }
    return sum
  }

  console.log(solution(6));
  // expected 23