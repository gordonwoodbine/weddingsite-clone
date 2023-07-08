const randomIntFromInterval = (min = 0, max = 10) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const alphabet = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';

export const codeGenerator = (len = 6) => {
  let str = '';
  for (let i = 0; i < len; i++) {
    str += alphabet.split('')[randomIntFromInterval(0, 25)];
  }
  return str;
};
