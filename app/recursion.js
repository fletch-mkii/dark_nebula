exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  out_arr: [],
  listFiles: function(data, dirName) {
    for (item in data) {
      debugger
      if (data["dir"] == dirName){
        this.out_arr = [];
      }
      if (item == "files") {
        for (index in data[item]) {
          if (typeof(data[item][index]) == "object") {
            this.listFiles(data[item][index]);
          } else {
            this.out_arr.push(data[item][index])
          }
        }
      } else if (item != "dir") {
          this.out_arr.push(data[item]);
      }
    }
    return this.out_arr
  },

  permute: function(arr) {
    // Optional Challenge
  },

  fibonacci: function(n) {
    // Optional Challenge
  },

  validParentheses: function(n) {
    // Optional Challenge
  }
};
