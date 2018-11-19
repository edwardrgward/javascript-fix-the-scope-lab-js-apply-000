var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal(){
<<<<<<< HEAD
  var animal = 'cat'
=======
  var animal = 'cat';
>>>>>>> 31f38e1c5943cb18c364c2cadd8f6a3f2575c9e0
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal;
}

function add2(n) {
<<<<<<< HEAD
const two = 2  
return n + two
=======
const two = 2  ;
return n + two;
>>>>>>> 31f38e1c5943cb18c364c2cadd8f6a3f2575c9e0
  // Feel free to move things around!
  
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  };
};

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
<<<<<<< HEAD
var theFunk = funkyFunction()()

theFunk
=======
var theFunk = funkyFunction()
var theFunk();
>>>>>>> 31f38e1c5943cb18c364c2cadd8f6a3f2575c9e0
