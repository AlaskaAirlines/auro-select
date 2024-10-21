// import { exampleFunction } from "exampleFile.js";

/* eslint-disable jsdoc/require-jsdoc, no-magic-numbers, no-param-reassign */

import { AuroSelect } from '../src/auro-select.js';
import '@aurodesignsystem/auro-menu';

AuroSelect.register(); // registering to `auro-select`
AuroSelect.register('custom-select');


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
