import run from '@soaf/esbuild-config';
import pkg from './package.json' assert { type: 'json' };

run({
  pkg,
});
