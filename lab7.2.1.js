//Initial word
const originalWord = 'exercise';

//Scrambling function
function scrambleWord(word) {
    let length = word.length;
    let scrambledWord = '';

    //For loop to iterate number of letters within string
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * length);
      let randomLetter = word.charAt(randomIndex);
      scrambledWord += randomLetter;
      word = word.substring(0, randomIndex) + word.substring(randomIndex + 1);
      console.log(`Original word: ${word}, Scrambled word: ${scrambledWord}, Letters remaining: ${length - (i + 1)}`);
    }
    return scrambledWord;
  }
  
  const scrambledWord = scrambleWord(originalWord);

  //Outputs original world and scrambled version
  console.log(`Original word: ${originalWord}, Scrambled word: ${scrambledWord}`);