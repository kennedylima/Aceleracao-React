'use strict'

const fibonacci = () => {
  const serie = [0, 1];
  const limit = 350;
  let lastNumber = 0;
  let indexLastNumber = 1;
  let indexPreviousNumber = 0;

  while (lastNumber < limit) {
    lastNumber = serie[indexLastNumber] + serie[indexPreviousNumber];
    serie.push(lastNumber);

    indexLastNumber++; 
    indexPreviousNumber++;
  }

  return serie;
}

const isFibonnaci = (num) => {
  return fibonacci().includes(num);
}

module.exports = {
  fibonacci,
  isFibonnaci
}
