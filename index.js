#! /usr/bin/env node
const obj = JSON.stringify(JSON.parse(process.argv[2]), null, '\t');
console.log('\n');
console.log('=================');
console.log('=================');
console.log('Quick and Pretty');
console.log('=================');
console.log('=================');
console.log('\n');
console.log(obj);
