import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

module.exports = {
    input: 'src/browser/index.ts',
    output: [{
        file: 'build/index.esm.js',
        format: 'es',
    }, {
        file: 'build/index.cjs.js',
        format: 'cjs',
    }],
    plugins: [
        typescript({
            tsconfig: 'tsconfig.json',
            tsconfigOverride: {
                compilerOptions: {
                    declaration: false,
                    declarationMap: false,
                    module: 'ES2015',
                },
            },
            include: ['*.ts+(|x)', '**/*.ts+(|x)', '../**/*.ts+(|x)'],
        }),
        resolve({
            browser: true,
        }),
        commonjs(),
    ],
};