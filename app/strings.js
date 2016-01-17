exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var letter_counts = {}
    var out_str = ""

    for (var i = 0; i < str.length; i++) {
      if (!letter_counts.hasOwnProperty(str[i])){
        letter_counts[str[i]] = 1
        out_str += str[i]
      } else {
        letter_counts[str[i]] += 1
        if (letter_counts[str[i]] <= amount) {
          out_str += str[i]
        }
      }
      if (str[i+1] != str[i]) {
        letter_counts[str[i]] = 0
      }
    }
    return out_str;
  },
  wordWrap: function(str, cols) {
    var wrapped_str = "";
    var col_count = 0;
    var split_str = str.split(" ");

    for (var i = 0; i < split_str.length; i++) {
      col_count += split_str[i].length;
      if (col_count == 5) {
        wrapped_str += split_str[i];
      } else if (col_count > 5 && (i != 0)) {
        if (wrapped_str[wrapped_str.length - 1] == " ") {
          wrapped_str = wrapped_str.substr(0,wrapped_str.length - 1) + "\n" + split_str[i]
        } else {
          wrapped_str = wrapped_str + "\n" + split_str[i]
        }
        col_count = split_str[i].length;
      } else{
        wrapped_str += split_str[i] + " ";
      }
    }
    return wrapped_str;
  },
  reverseString: function(str) {
    var rev_str = "";
    for (var i = str.length - 1; i >= 0; i--) {
      rev_str += str[i];
    }
    return rev_str
  }
};
