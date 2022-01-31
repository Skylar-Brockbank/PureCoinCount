const coinCounter = (input,unit) => {
  if(isNaN(input))
  {
    return;
  }
  if (input < unit) {
    return input;
  } else {
    return coinCounter((input -unit),unit);
  }
};

const coinIterations = (input,unit) => {
  return (input - coinCounter(input,unit)) / unit;
};


function finalValue(input)
{
  return [coinIterations(input,25), coinIterations(coinCounter(input,25),10),coinIterations(coinCounter(coinCounter(input,25),10),5), coinIterations(coinCounter(coinCounter(coinCounter(input,25),10),5),1)];
}

console.log(finalValue(250));
console.log(finalValue(634));
console.log(finalValue(197));
console.log(finalValue(2013));



// const coinCounter = (input, unit) => {
//   if (input < unit)
//   if (input > quarter) {
//     return [((input / quarter) / 25), ]
//   } else {
//     [0, ...]
//   }
//   return[quarterCount, ]
// }
// quarters = total - (total % 25) / 25
// dimes = total - (quarters * 25) 

//convert dollars to cents (float)Ammount * 100 cast to int

//recursively remove quarters while ammount >=25 subtract 25 return number of times run

//remainder after quarters ammount % 25

//recursively remove dimes return number of times run

//remainder after dimes remainder of quarters%10

//recursively remove nickels return number of nickels

//remainder after nickels return number of pennies