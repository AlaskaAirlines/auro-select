// import { exampleFunction } from "exampleFile.js";

/* eslint-disable jsdoc/require-jsdoc, no-magic-numbers, no-param-reassign */

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    // javascript example function calls to be added here upon creation to test examples
    // exampleFunction();
  } catch (err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
