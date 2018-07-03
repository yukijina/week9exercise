// //create 5 strings in an array
// var myArray = ['apple', 'orange', 'grape', 'banana', 'peach'];
//
//
// //No.5 log the length of each of the strings inside the array to console
// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i].length);
// }
//
// //No.6 reverse array
// // myArray.reverse();
//
// //No.7 create copy of original array(myArray)
// var copy = [];
// function copyArray() {
//   for (var i = 0; i < myArray.length; i++) {
//     copy.push(myArray[i]);
//   }
// }
// copyArray();
// //now if you log copy to the console, it shows original array (myArray)
//
//
// //No.8 sort your array of strings alhabetically
// myArray.sort(); // it sorts alphabetically in console
//
//
// //no.9 create another array includes at least 5 numbers
// var myNumber = [100, 439, 8, 932, 85, 32, 19, 3, 28];
//
// //ascending
// myNumber.sort(function(a, b) {
//   return a - b;
// });
//
// //now descending
// myNumber.sort(function(a, b) {
//   return b - a;
// });
//
//
// //No.10 create another array with three strings
// var animals = ['lion', 'panda', 'monkey'];
//
// //No.11 add two new strings to the end of the myArray
// animals.push('sheep', 'bear');
//
// //No.12 remove one string from the begining of the myArray
// animals.shift(); // lion removed, now re have 4 strings


//No.13
var newArray = [];

//No.15
var myUl = document.getElementsByTagName('ul')[0];
var myBtn = document.getElementsByTagName('button')[0];

myBtn.onclick = function () {
  var myInput = document.getElementsByTagName('input')[0].value;
  newArray.push(myInput);
  for (var i = 0; i < newArray.length; i++) {

    var myLi = document.createElement('li');
    console.log(myLi.textContent = newArray[i]);
    myUl.appendChild(myLi);
  }
  }
