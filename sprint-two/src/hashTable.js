var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var subArray;

  if(this._storage.get(i) === undefined) {
    subArray = LimitedArray(8);
    this._storage.set(i, subArray);
  } else {
    subArray = this._storage.get(i);
  }

  var counter = 0;

  subArray.each(function () {
    counter ++;
  });

  var node = [key, value];
  subArray.set(counter, node);
};

HashTable.prototype.retrieve = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var subArray = this._storage.get(i);
  var val;

  subArray.each(function(pair){
    if(pair[0] === key){
      val = pair[1];
    }
  });

  return val;
};

HashTable.prototype.remove = function(key){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var subArray = this._storage.get(i);

  if(subArray !== undefined) {
    subArray.each(function (pair) {
      if(pair[0] === key) {
        pair[1] = null;                                                                                                    ;
      }
    });
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 * insert: Linear Time O(n) to Constant Time O(1) -- Approximately Constant
 * retrieve: Linear Time O(n)
 * remove: at Best Constant Time and at worst Linear Time
 */
