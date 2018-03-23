/*
 * You know the drill now! Gotta pass 'em all!
 */


const apply = () =>
  // apply an argument to the following
  // function so that it returns the value 0
  ((x) => x)(0)


const whatIsIt = () =>
  // make it true! what does the function evaluate to?
  ((y) => y * 2)(21) === 42


const whatDoesItDo = () =>
  // make it true! what does the function evaluate to?
  ((x) => (y) => x)(1)(2) === 1


const hiThere = () => (
  // apply the correct arguments to the following
  // function so the string 'Hi there!' is returned
  (word1, word2) => word1 + ' ' + word2 + '!'
)('Hi', 'there') // <-- hint: do your work here


// complete this function so it evaluates to the
// sum of its two number arguments (numOne & numTwo)
const add = (numOne, numTwo) => numOne + numTwo


const double = (numOne) =>
  // the current function should take one number and double it
  // by using a closure; however, the function below is a pure
  // function that only returns 2; edit the function below so
  // it works as expected
  ((numTwo) => numOne * numTwo)(2)


const closure = () => (
  (x) =>
    (y) =>
      (z) => x + y + z
)(1)(8)(5) // <-- apply arguments here so the above function
  // evaluates to a number (hint: p. 23)


const purifyMe = () => (
  // currently, this function is the same as the
  // closure above; rewrite it as a pure function
  (x, y, z) => x + y + z
)(1, 8, 5) // <-- apply arguments to your pure function


const closureWannaBe = () =>
  // rewrite this function to use a closure
  ((room) => (board) => room + board)(800)(150)


// that's all!

module.exports = {
  apply,
  hiThere,
  whatIsIt,
  whatDoesItDo,
  add,
  double,
  closure,
  purifyMe,
  closureWannaBe
}