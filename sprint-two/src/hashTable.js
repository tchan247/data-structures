var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.saturation = 0;
};

HashTable.prototype.insert = function(key, value){
  var i = getIndexBelowMaxForKey(key, this._limit);
  var subArray;
  this.saturation++;

  if(this._storage.get(i) === undefined) {
    subArray = LimitedArray(this._limit);
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

  if (this.saturation/this._limit >= 0.75) {
    this.resize();
  }
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

  this.saturation--;

  if(subArray !== undefined) {
    subArray.each(function (pair) {
      if(pair[0] === key) {
        pair[1] = null;                                                                                                    ;
      }
    });
  }

  // debugger

  // if (this.saturation/this._limit <= 0.25) {
  //   this.shrink();
  // }
};

HashTable.prototype.resize = function(){
  var newLimit = this._limit * 2;
  var storage = LimitedArray(newLimit);

  this._storage.each(function(bucket){
    if(bucket !== undefined) {
      bucket.each(function(pair){
        var i = getIndexBelowMaxForKey(pair[0], newLimit);
        storage.set(i, pair[1]);
      });
    }
  });

  this._storage = storage;
  this._limit = newLimit;
}

HashTable.prototype.shrink = function () {
 var newLimit = Math.floor(this._limit / 2);
 var storage = LimitedArray(newLimit);

 this._storage.each(function(bucket){
   if(bucket !== undefined) {
     bucket.each(function(pair){
       var i = getIndexBelowMaxForKey(pair[0], newLimit);
       storage.set(i, pair[1]);
     });
   }
 });

 this._storage = storage;
 this._limit = newLimit;
}

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: Linear Time O(n) to Constant Time O(1) -- Approximately Constant
 * retrieve: Linear Time O(n)
 * remove: at Best Constant Time and at worst Linear Time
 */
