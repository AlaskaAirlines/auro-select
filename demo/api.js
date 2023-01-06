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
   * Send alert to user when an option is selected
   */
  import { valueAlert } from './alertValue';
  
  (function(){
    initializeExample('auro-select#valueAlert', function(elem) {
      valueAlert(elem);
    });
  }());
  
  /**
   * Extract the value from auro-select element
   */
  import { getValue } from './extractValue';
  
  (function(){
    initializeExample('#valueExtraction', function(elem) {
      getValue(elem);
    });
  }());
  
  /**
   * Programmatically set value of auro-select
   */
   import { setValue } from './../apiExamples/value';
  
   (function(){
     initializeExample('#valueExample', function(elem) {
      setValue(elem);
     });
   }());

   /**
   * Show auro-select overflow when nested inside another element
   */
  import { openDialog } from './../apiExamples/nestedSelect';

  (function(){
    initializeExample('#nestedSelect', function() {
      openDialog();
    });
  }());

   /**
   * Programmatically set error attribute
   */
   import { setError } from '../apiExamples/errorApi';
  
   (function(){
     initializeExample('#errorExample', function(elem) {
      setError(elem);
     });
   }());

    /**
   * Programmatically set error attribute based on specific condition
   */
    import { setErrorOnValueChange } from './../apiExamples/customErrorValidity';
  
    (function(){
      initializeExample('#primaryError', function(elem) {
        setErrorOnValueChange(elem);
      });
    }());
