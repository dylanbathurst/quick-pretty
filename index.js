#! /usr/bin/env node
if (!process.argv[2]) {
  let input = '';
  process.stdin
    .on('data', data => {
      input += data;
    })
    .on('end', () => {
      writeOutput(JSON.parse(input));
    });
} else {
  const input = JSON.parse(process.argv[2]);

  if (process.argv[3]) {
    process.argv[3].split(',').forEach((mod) => {
      delete input[mod];
    });
  }

  writeOutput(input);
}

function writeOutput(input) {
  const output = JSON.stringify(input, null, '\t');
  console.log('\n');
  console.log('=================');
  console.log('=================');
  console.log('Quick and Pretty');
  console.log('=================');
  console.log('=================');
  console.log('\n');
  console.log(output);
}
