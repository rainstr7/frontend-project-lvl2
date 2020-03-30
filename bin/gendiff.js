#!/usr/bin/env node

import commander from 'commander';

const program = new commander.Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('Usage: gendiff <firstConfig> <secondConfig>');

program.parse(process.argv);
