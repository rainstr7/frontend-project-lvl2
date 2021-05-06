import fs from 'fs';

const genDiff = (fileName1, fileName2) => {
  const object1 = JSON.parse(fs.readFileSync(fileName1, 'utf-8'));
  const object2 = JSON.parse(fs.readFileSync(fileName2, 'utf-8'));
  return JSON
    .stringify([...Object.keys(object1), ...Object.keys(object2)]
      .reduce((acc, current) => {
        if (object1[current] === object2[current]) {
          acc[`    ${current}`] = object1[current];
        } else {
          if (object1[current] !== undefined) {
            acc[`  - ${current}`] = object1[current];
          }
          if (object2[current] !== undefined) {
            acc[`  + ${current}`] = object2[current];
          }
        }
        return acc;
      }, {})).split('')
    .filter((symbol) => symbol !== '"')
    .map((symbol) => ((symbol === '{' || symbol === '}') ? `\n${symbol}\n` : symbol))
    .map((symbol) => (symbol === ',' ? '\n' : symbol))
    .join('');
};
export default genDiff;
