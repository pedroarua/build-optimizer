/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export { default as buildOptimizerLoader } from './build-optimizer/webpack-loader';
export { buildOptimizer } from './build-optimizer/build-optimizer';
export { transformJavascript } from './helpers/transform-javascript';
export { getFoldFileTransformer } from './transforms/class-fold';
export { getImportTslibTransformer, testImportTslib } from './transforms/import-tslib';
export { getPrefixClassesTransformer, testPrefixClasses } from './transforms/prefix-classes';
export { getPrefixFunctionsTransformer } from './transforms/prefix-functions';
export { getScrubFileTransformer, getScrubFileTransformerForCore, testScrubFile, } from './transforms/scrub-file';
export { getWrapEnumsTransformer } from './transforms/wrap-enums';
