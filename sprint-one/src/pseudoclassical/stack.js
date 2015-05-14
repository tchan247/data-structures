var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.top = 0;
  this.storage = {};

};

 Stack.prototype.push = function (value) {
   this.storage[this.top] = value;
   this.top++;
 };

 Stack.prototype.pop = function () {
   if(this.top > 0) {
     this.top--;
     var result = this.storage[this.top];
     delete this.storage[this.top];
     return result;
   }
 };

 Stack.prototype.size = function () {
   return this.top;
 };


// assuming(referencesThis).expect(/this/.test(constructor)).to.be.true;



// var inst = new Stack();
// inst.__proto__  = Stack.prototype;

// inst.push();
// inst.__proto__.push()





































 // var methods = {
 //   push : function (value) {
 //     this.storage[top] = value;
 //     top++;
 //   },
 //   pop : function () {
 //     if(top > 0) {
 //       top--;
 //       var result = this.storage[top];
 //       delete this.storage[top];
 //       return result;
 //     }
 //   },
 //   size : function () {
 //     return top;
 //   }
 // }



// log = function () { console.log( this ) ;}
// "name".log();
// log.apply("brian");

// newInstance.Stack()

// new (newInstance).Stack()

// var inst = new Stack();
// inst.size
// inst.pop()


// does extend the constructor function's prototype ‣
// AssertionError: expected 0 to be above 0

// var prototypeObjectPropertyCount = Object.keys(constructor.prototype).length;

// assuming(extendsPrototype).expect(prototypeObjectPropertyCount).to.be.above(0);

// assuming(referencesThis).expect(/^((?!\/\/).)*(this)/.test(constructor)).to.be.true;

