import { babel } from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';
import packageJson from './package.json';
import path from 'path';
import styles from 'rollup-plugin-styles';
import dts from 'rollup-plugin-dts';

const isProd = process.env.NODE_ENV === 'production';

export default [
  {
    input: ['src/index.ts'],
    output: {
      file: packageJson.module,
      format: 'esm',
      assetFileNames: '[name][extname]',
    },
    watch: {
      clearScreen: false,
    },
    plugins: [
      styles({
        minimize: isProd,
        mode: ['extract', 'style.css'],
        extensions: ['.scss', '.css', '.pcss', '.postcss', '.sss'],
        import: {
          extensions: ['.scss', '.css', '.pcss', '.postcss', '.sss'],
        },
        sass: {
          impl: 'sass',
          includePaths: [path.resolve('../../node_modules')],
        },
      }),
      resolve(),
      peerDepsExternal(),

      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfig: './src/tsconfig.src.json',
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled',
      }),
      alias({
        resolve: ['.js', '.ts', '*.tsx', '.jsx', '.css', '.scss'],
        entries: [
          { find: 'src', replacement: './src' },
          { find: 'components', replacement: './src/components' },
        ],
      }),
      image(),
      json(),
      isProd && terser({ module: true }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.scss$/],
    plugins: [dts()],
  },
];
