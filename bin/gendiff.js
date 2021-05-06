#!/usr/bin/env node

import commander from 'commander';
import gendiff from '../index.js';

const program = new commander.Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((fileName1, fileName2) => {
    console.log('$ gendiff filepath1.json filepath2.json\n'
      + '\n'
      + '{\n'
      + '  - follow: false\n'
      + '    host: hexlet.io\n'
      + '  - proxy: 123.234.53.22\n'
      + '  - timeout: 50\n'
      + '  + timeout: 20\n'
      + '  + verbose: true\n'
      + '}');
    console.log(gendiff(fileName1, fileName2));
  })
  .arguments('Usage: gendiff <firstConfig> <secondConfig>');

program.parse(process.argv);
