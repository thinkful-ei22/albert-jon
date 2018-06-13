let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'
// Use the reduce function to iterate through an array of words and construct a decoded sentence (string)
let output = input.split(' ').reduce((decoded, letters ) => {
// If the array element is exactly three characters in length, add a space character to your accumulator
if(letters.length === 3) return decoded + ' ';
// Otherwise, capitalize the LAST character of the array element and add it to your accumulator
return decoded + letters[letters.length - 1].toUpperCase();
},'');

console.log(output);


// HINT: When you invoke reduce() you will need to set the initialValue parameter to an
// empty string so that future iterations can concatenate more string characters