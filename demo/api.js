function initializeExample(element, callback, retryCount) {
    const elem = document.querySelector(element);
  
    if (!elem || !elem.ready) {
      // If the component is not ready, retry until it is
      if (!retryCount && retryCount != 0) {
        retryCount = 0;
      } else {
        retryCount += 1;
      }
  
      if (retryCount < 10) {
        setTimeout(initializeExample, 500, element, callback, retryCount);
      } else {
        console.error('Unable to initialize functional example code for:', element);
      }
    } else {
      callback(elem);
    }
  }
  
  /**
   * Programmatically show the dropdown
   */
  import { valueAlert } from './alertValue';
  
  (function(){
    initializeExample('auro-select#valueAlert', function(elem) {
      valueAlert(elem);
    });
  }());
  
  /**
   * Programmatically show the dropdown
   */
  import { getValue } from './extractValue';
  
  (function(){
    initializeExample('#valueExtraction', function(elem) {
      getValue(elem);
    });
  }());
  
  /**
   * Programmatically show the dropdown
   */
   import { setValue } from './../apiExamples/value';
  
   (function(){
     initializeExample('#valueExample', function(elem) {
      setValue(elem);
     });
   }());
