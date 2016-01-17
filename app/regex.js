exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var regex = /\d/;
    if (regex.test(str)) {
      return true;
    } else {
      return false;
    }
  },

  containsRepeatingLetter : function(str) {
    var regex = /(\D)\1{1,}/
    if (regex.test(str)) {
      return true;
    } else {
      return false;
    }
  },

  endsWithVowel : function(str) {
    var regex = /[aeiouAEIOU]$/
    if (regex.test(str)) {
      return true;
    } else {
      return false;
    }
  },

  captureThreeNumbers : function(str) {
    var regex = /\d{3}/
    if (regex.test(str)) {
      return regex.exec(str)[0];
    } else {
      return false;
    }
  },

  matchesPattern : function(str) {
    var regex = /^\d{3}-\d{3}-\d{4}$/
    if (regex.test(str)) {
      return true;
    } else {
      return false;
    }
  },

  isUSD : function(str) {
    var regex = /^\$(\d{1,3},)?(\d{3},?)+(\.\d{2})?$|^\$\d{1,3}(\.\d{2})?$/
    if (regex.test(str)) {
      return true;
    } else {
      return false;
    }
  }
};
