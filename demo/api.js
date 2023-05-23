import { customErrorValidityExample } from "../apiExamples/customErrorValidity";
import { setErrorExample } from "../apiExamples/errorApi";
import { nestedSelectExample } from "../apiExamples/nestedSelect";
import { valueExample } from "../apiExamples/value";
import { valueExtractionExample } from "../apiExamples/valueExtraction";

export function initSelectApiExamples(initCount) {
  initCount = initCount || 0;

  try {
    customErrorValidityExample();
    setErrorExample();
    nestedSelectExample();
    valueExample();
    valueExtractionExample();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initSelectApiExamples(initCount + 1);
      }, 100);
    }
  }
}
