import {safeAlign} from 'eslint-plugin-putout';
import {
    createESLintConfig,
    matchToFlat,
} from '@putout/eslint-flat';

export let match;
export default createESLintConfig([safeAlign, matchToFlat(match)]);
