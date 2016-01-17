exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (item == arr[i]) {
        arr.splice(i, 1);
        i -= 1
      }
    }
    return arr
  },

  append : function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate : function(arr) {
    arr.splice(-1,1)
    return arr
  },

  prepend : function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail : function(arr) {
    arr.splice(0,1)
    return arr
  },

  concat : function(arr1, arr2) {
    var arr_both = arr1.concat(arr2)
    return arr_both
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item)
    return arr
  },

  count : function(arr, item) {
    var count = 0
    for (var i = 0; i < arr.length; i++) {
      if (item == arr[i]) {
        count += 1;
      }
    }
    return count
  },

  duplicates : function(arr) {
    var dup_list = [];
    var item_counts = {};

    for (var i = 0; i < arr.length; i++) {
      item_counts[arr[i]]=0;
    }
    for (var j = 0; j < arr.length; j++) {
      item_counts[arr[j]] += 1;
    }
    for (k in item_counts) {
      if (item_counts[k] > 1) {
        dup_list.push(Number(k));
      }
    }
    return dup_list;
  },

  square : function(arr) {
    var square_arr = []
    for (var i = 0; i < arr.length; i++) {
      square_arr.push(arr[i]*arr[i])
    }
    return square_arr
  },

  findAllOccurrences : function(arr, target) {
    var index_list = []
    for (var i = 0; i < arr.length; i++) {
      if (target == arr[i]) {
        index_list.push(i)
      }
    }
    return index_list
  }
};
