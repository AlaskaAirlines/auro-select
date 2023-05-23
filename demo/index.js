// import { exampleFunction } from "exampleFile.js";

export function initSelectIndexExamples(initCount) {
  initCount = initCount || 0;

  try {
    // exampleFunction();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initSelectIndexExamples(initCount + 1);
      }, 100);
    }
  }
}
