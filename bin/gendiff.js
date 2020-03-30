#!/usr/bin/env node

import commander from 'commander';

const program = new commander.Command();

program
  .version('0.1.0')
  .description('Compares two configuration files and shows a difference.');

program.on('--help', () => {
  console.log('');
  console.log('Example call:');
  console.log('  $ custom-help --help');
});
program.parse(process.argv);
