var BinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.left = undefined;
  newTree.right = undefined;

  newTree.insert = function(newVal){
    // debugger;
    if(newTree.value === newVal){
      return ;
    } else if (newTree.value < newVal){
      if(!newTree.right){
        newTree.right = BinarySearchTree(newVal);
      } else {
        newTree.right.insert(newVal);
      }
    } else if (newTree.value > newVal){
      if(!newTree.left){
        newTree.left = BinarySearchTree(newVal);
      } else {
        newTree.left.insert(newVal);
      }
    }
  };

  newTree.depthFirstLog = function(callback){
    callback(this.value);
    if(this.right){
      this.right.depthFirstLog(callback);
    }
    if(this.left){
      this.left.depthFirstLog(callback);
    }
  };

  newTree.contains = function(val){
    var bool = false;

    this.depthFirstLog(function(treeValue){
      if(treeValue === val){
        bool = true;
      }
    });

    return bool;
  };

  return newTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: At best, Logarithmic Time O(log n), and at worst, Linear Time O(n)
 * contains: Linear Time O(n)
 * depthFirstLog: Linear Time O(n)
 */
