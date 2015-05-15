var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  for(var key in treeMethods){
    newTree[key] = treeMethods[key];
  }
  // your code here
  newTree.children = [];  // fix me

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
 */

// A tree class, in functional with shared methods style, with the following properties:
// .children property, an array containing a number of subtrees
// .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
// A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
// What is the time complexity of the above functions?
