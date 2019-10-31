import funnel from 'broccoli-funnel';
import merge from 'broccoli-merge-trees';
import sass from 'sass';
import sassSourceMaps from 'broccoli-sass-source-maps';
import Rollup from 'broccoli-rollup';
import LiveReload from 'broccoli-livereload';
import ESLint from 'broccoli-lint-eslint';
import SassLint from 'broccoli-sass-lint';
import CleanCss from 'broccoli-clean-css';
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import broccoliEnv from 'broccoli-env';
import AssetRev from 'broccoli-asset-rev';

const env = broccoliEnv.getEnv() || 'development';

const isProduction = env === 'production';

console.log('Environment: ', env);

const appRoot = 'src';

const compileSass = sassSourceMaps(sass);

// Copy HTML file from app root to destination
const html = funnel(appRoot, {
  files: ['index.html'],
  annotation: 'Index file',
});

// Lint js files
let js = ESLint.create(appRoot, {
  persist: true
});

// Compile JS through rollup
const rollupPlugins = [
  nodeResolve({
    jsnext: true,
    browser: true,
  }),
  commonjs({
    include: 'node_modules/**',
  }),
  babel({
    exclude: 'node_modules/**',
  }),
];

// Uglify the output for production
if (isProduction) {
  rollupPlugins.push(terser());
}

js = new Rollup(js, {
  inputFiles: ['**/*.js'],
  rollup: {
    input: 'app.js',
    output: {
      file: 'assets/app.js',
      format: 'es',
      sourcemap: !isProduction,
    },
    plugins: rollupPlugins,
  }
});

// Lint css files
let css = new SassLint(appRoot + '/styles', {
  disableTestGenerator: true,
});

// Compile sass files
css = compileSass(
  [css],
  'app.scss',
  'assets/app.css',
  {
    annotation: 'Sass files',
    sourceMap: !isProduction,
    sourceMapContents: true,
  }
);

if (isProduction) {
  css = new CleanCss(css);
}

// Copy public files into destination
const publicFiles = funnel('public', {
  annotation: 'Public files',
});

let tree = merge([html, js, css, publicFiles], { annotation: 'Final output' });

if (isProduction) {
  tree = new AssetRev(tree);
}
else {
  // Include live reaload server
  tree = new LiveReload(tree, {
    target: 'index.html',
  });
}

export default () => tree;