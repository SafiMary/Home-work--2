//1
let people = [];
people.push("Tom");
people.push("Sam");
people.push("Bob","Mike");

function findLongestWord(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
var word = findLongestWord(people);
console.log(word);
let allSymbols = word.split('');
//копировали в другой массив
let users = [];
users= allSymbols;
console.log(users);

//2
function marker(text,color,num){
    document.write(`<p  class="block" style="font-size: ${num}px;color:${color};">${text}</p>`)
}

console.log(marker('fkdkkkk','blue',40));

//3

