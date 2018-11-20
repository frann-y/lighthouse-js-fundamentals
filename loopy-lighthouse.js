// (x) print the numbers from 100 to 200 to the console, with three exceptions:
  // multiple of 3, print the string "Loopy"
  // multiple of 4, print the string "Lighthouse"
  // multiple of both 3 and 4, print the string "LoopyLighthouse"



for (var i = 100; i <= 200; i++) {
  if ((i % 3 === 0) && (i % 4 === 0)) {
    console.log ('LoopyLighthouse');
  } else if (i % 4 === 0) {
    console.log('Lighthouse');
  } else if (i % 3 === 0) {
    console.log('Loopy');
  } else {
    console.log(i);
  }
}