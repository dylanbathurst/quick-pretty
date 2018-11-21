#! /usr/bin/env node

const input = JSON.parse(process.argv[2]);
const modifiers = process.argv[3].split(',');
modifiers.forEach((mod) => {
  delete input[mod];
});
const output = JSON.stringify(input, null, '\t');
console.log('\n');
console.log('=================');
console.log('=================');
console.log('Quick and Pretty');
console.log('=================');
console.log('=================');
console.log('\n');
console.log(output);
