import { customErrorValidityExample } from "../apiExamples/customErrorValidity";
import { setErrorExample } from "../apiExamples/errorApi";
import { nestedSelectExample } from "../apiExamples/nestedSelect";
import { valueExample } from "../apiExamples/value";
import { valueExtractionExample } from "../apiExamples/valueExtraction";

/* eslint-disable jsdoc/require-jsdoc, no-magic-numbers, no-param-reassign */

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    // javascript example function calls to be added here upon creation to test examples
    customErrorValidityExample();
    setErrorExample();
    nestedSelectExample();
    valueExample();
    valueExtractionExample();
  } catch (err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
