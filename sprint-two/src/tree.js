var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  for(var key in treeMethods){
    newTree[key] = treeMethods[key];
  }

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = Tree(value);
  this.children.push(tree);
  return tree;
};

treeMethods.contains = function(target){
  var contains = false;

  var inner = function(tree){
    if(tree.value === target){
      contains = true;
    }

    var children = tree.children;

    if(!children){
      return ;
    }

    for(var i=0; i<children.length; i++) {
      inner(children[i]);
    }
  }
  // debugger;
  inner(this);

  return contains;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: Constant Time O(1)
 * contains: Linear Time O(n)
 */
