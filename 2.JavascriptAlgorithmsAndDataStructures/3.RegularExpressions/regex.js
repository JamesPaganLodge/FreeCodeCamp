// Using the test method
let testString = "Hello World!";
let testRegex = /Hello/;
let testResult = testRegex.test(testString);
//console.log(testResult);
// ----------------------------------------------
// Match literal strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let waldoResult = waldoRegex.test(waldoIsHiding);
//console.log(waldoResult);
// ----------------------------------------------
// Match a string literal with different possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let petResult = petRegex.test(petString);
//console.log(petResult);
// ----------------------------------------------
// Ignore case while matching
let ignoreString = "freeCodeCamp";
let ignoreRegex = /freecodecamp/i;
let ignoreResult = ignoreRegex.test(ignoreString);
//console.log(ignoreResult);
// ----------------------------------------------
// Extract matches
let extractString = "Extract the word 'coding' from this string.";
let extractRegex = /coding/;
let extractResult = extractString.match(extractRegex);
//console.log(extractResult);
// ----------------------------------------------
// Find more than the first match
let twinkleString = "Twinkle, twinkle, little star";
let twinkleRegex = /twinkle/gi;
let twinkleResult = twinkleString.match(twinkleRegex);
//console.log(twinkleResult);
// ----------------------------------------------
// Match anything with wildcard period
let wildString = "Let's have some fun with regular expressions!";
let wildRegex = /.un/;
let wildResult = wildRegex.test(wildString);
//console.log(wildResult);
// ----------------------------------------------
// Match a single character with multiple possibilities
let quoteString = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let vowelResult = quoteString.match(vowelRegex);
//console.log(vowelResult);
// ----------------------------------------------
// Match letters of the alphabet
let foxString = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[A-z]/g;
let alphabetResult = foxString.match(alphabetRegex);
//console.log(alphabetResult.length);
// ----------------------------------------------
// Match numbers and letters of the alphabet
let blueString = "Blueberry 3.141592653s are delicious.";
let blueRegex = /[h-s2-6]/gi;
let blueResult = blueString.match(blueRegex);
//console.log(blueResult.length);
// ----------------------------------------------
// Match single characters not specified
let nonString = "3 blind mice.";
let nonRegex = /[^aeiou0-9]/gi;
let nonResult = nonString.match(nonRegex);
//console.log(nonResult.length);
// ----------------------------------------------
// Match characters that occur one or more times
let diffString = "Mississippi";
let diffRegex = /s+/g;
let diffResult = diffString.match(diffRegex);
//console.log(diffResult);
// ----------------------------------------------
// Match characters that occur zero or more times
let chewieString = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let chewieResult = chewieString.match(chewieRegex);
//console.log(chewieResult);
// ----------------------------------------------
// Find characters with lazy matching
let htmlString = "<h1>Winter is coming</h1>";
let htmlRegex = /<.*?>/;
let htmlResult = htmlString.match(htmlRegex);
//console.log(htmlResult);
// ----------------------------------------------
// Find one or more criminals in a hunt
let crowd = "P1P2P3P4P5P6CCCP7P8P9";
let criminalsRegex = /c+/i;
let matchedCriminals = crowd.match(criminalsRegex);
//console.log(matchedCriminals);
// ----------------------------------------------
// Match beginning string patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let calResult = calRegex.test(rickyAndCal);
//console.log(calResult);
// ----------------------------------------------
// Match ending string patterns
let caboose = "The last car on the train is the caboose";
let cabooseRegex = /caboose$/;
let cabooseResult = cabooseRegex.test(caboose);
//console.log(cabooseResult);
// ----------------------------------------------
// Match all letters and numbers using shorthand
let sample = "The five boxing wizards jump quickly.";
let alphaRegexV2 = /\w/g;
let alphaResultV2 = sample.match(alphaRegexV2);
//console.log(alphaResultV2.length);
// ----------------------------------------------
// Match everything but letters and numbers using shorthand
let nonAlphaSample = "The five boxing wizards jump quickly.";
let nonAlphaRegex = /\W/g;
let nonAlphaResult = nonAlphaSample.match(nonAlphaRegex).length;
//console.log(nonAlphaResult);
// ----------------------------------------------
// Match all numbers using shorthand
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g;
let numResult = numString.match(numRegex).length;
//console.log(numResult);
// ----------------------------------------------
// Match all non-numbers using shorthand
let nonNumString = "Your sandwich will be $5.00";
let nonNumRegex = /\D/g;
let nonNumResult = nonNumString.match(nonNumRegex).length;
//console.log(nonNumResult);
// ----------------------------------------------
// Restrict possible usernames
let username = "JackOfAllTrades";
let userCheck = /[A-z][A-z]+\d*/;
let checkResult = userCheck.test(username);
//console.log(checkResult);
// ----------------------------------------------
// Match whitespace using shorthand
let whitespaceString = "Whitespace is important in separating words";
let whitespaceRegex = /\s/g;
let whitespaceResult = whitespaceString.match(whitespaceRegex);
//console.log(whitespaceResult);
// ----------------------------------------------
// Match non-whitespace characters using shorthand
let nonWhitespace = "Whitespace is important in separating words";
let nonWhitespaceRegex = /\S/g;
let nonWhitespaceResult = nonWhitespace.match(nonWhitespaceRegex);
//console.log(nonWhitespaceResult.length);
// ----------------------------------------------
// Specify upper and lower number of matches
let ohStr = "Ohhhhhhh no";
let ohRegex = /Oh{3,6}\sno/;
let ohResult = ohRegex.test(ohStr);
//console.log(ohResult);
// ----------------------------------------------
// Specify only the lower number of matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let haResult = haRegex.test(haStr);
//console.log(haResult);
// ----------------------------------------------
// Specify exact number of matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let timResult = timRegex.test(timStr);
//console.log(timResult);
// ----------------------------------------------
// Check for all or none
let favWord = "favorite";
let favRegex = /favou?rite/;
let favResult = favRegex.test(favWord);
//console.log(favResult);
// ----------------------------------------------
// Positive and Negative lookahead
let lookStr = "astronaut";
let lookRegex = /(?=\w{5,})(?=\D*\d{2})/;
let lookResult = lookRegex.test(lookStr);
//console.log(lookResult);
// ----------------------------------------------
// Reuse patterns using capture groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let reResult = reRegex.test(repeatNum);
//console.log(reResult);
let reMatch = repeatNum.match(reRegex);
//console.log(reMatch);
// ----------------------------------------------
// Use capture groups to search and replace
let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText = "okey-dokey";
let finalResult = huhText.replace(fixRegex, replaceText);
//console.log(finalResult);
// ----------------------------------------------
// Remove whitespace from start and end
let hello = "    Hello, World!   ";
let wsRegex = /^\s+|\s+$/g;
let helloNoWs = hello.replace(wsRegex, "");
console.log(helloNoWs);
