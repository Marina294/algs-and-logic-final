/*
Write a function that takes in a string and converts it into kebab case
(ex. ('Dogs are cute') ---> Dogs-Are-Cute) notice how every word 
becomes capitalized, and connected by a hyphen.
if the string passed in is an empty string, return 'This is an empty string!'

for this question, make a comment for every piece of the code, explaining
what it does and why.
*/

const kebabCase = function (str) {
    // your code here
     //If string is '', write this text 
     if (str === '') {
         return 'This is an empty string!';
     }
     //make a letter lower case
    let lowerCase = str.toLowerCase(); 
    // split up the string
    let splitStr = lowerCase.split(' ');
    // make the first letter uppercase for each word
    for(let i = 0; i < splitStr.length; i++) {
        // ever word split
        let splitWord = splitStr[i].split(``);
        // first word will upper case
        splitWord[0] = splitWord[0].toUpperCase();
        // join the words
        joinWord = splitWord.join("");
        // join the strings
        splitStr[i] = joinWord;

    }
    // console.log(splitStr);
    return splitStr.join("-");
 

}

// console.log(kebabCase('Coding Is Fun')); 
// console.log(kebabCase('this STrIng has Weird casing'));

// console.log(kebabCase(''));

console.log((kebabCase('Coding Is Fun') === 'Coding-Is-Fun') ? "Test 1: Passing" : "Test 1: Failing");

console.log((kebabCase('this STrIng has Weird casing') === 'This-String-Has-Weird-Casing') ? "Test 2: Passing" : "Test 2: Failing");

console.log((kebabCase('') === 'This is an empty string!') ? "Test 3: Passing" : "Test 3: Failing");
