// Translate the binary sequences in the
// console.logs below to 8-bit ASCII strings:

/******************************************************************************/

// Helper function to convert a binary string into an array of 8-bit strings
const binaryStringToArray = str => {
  let binary8bitStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    binary8bitStr += str[i];
    count++;

    if (count % 8 === 0) {
      if (!str[i + 1]) break;
      binary8bitStr += ',';
    }
  }

  return binary8bitStr.split(',');
};

const binaryToAscii = str => {
  // Your code here
  // put str into helper function, returns array of 8digit binaries
  // change to decimal using parseInt
  // change to ascii using str.fromcharCodeAt(index)
  // console.log(binaryStringToArray(str))

  let binArr = binaryStringToArray(str) // array of 8digit bin
  let ascii = ""
  let decimals = []

  for (let el of binArr) {
    decimals.push(parseInt(el, 2)) // [98, 99, 100]
  }
  // console.log(decimals)
  for (let i = 0; i < decimals.length; i++) {
    ascii += String.fromCharCode(decimals[i])
  }

  return ascii
  // return String.fromCharCode(decimals).join("")

};

/******************************************************************************/

console.log(binaryToAscii('011000010110001001100011'));
// 'abc'

console.log(binaryToAscii('010000010100001001000011'));
// 'ABC'

console.log(binaryToAscii('010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100'));
// 'Hello, world'
