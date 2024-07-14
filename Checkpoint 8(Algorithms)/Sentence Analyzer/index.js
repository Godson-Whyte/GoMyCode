function analyzeSentence(sentence) {
    let charCount = 0;
    let wordCount = 0;
    let vowelCount = 0;
    let vowels = 'aeiouAEIOU';
    let inWord = false;
  
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
      if (char === '.') {
        charCount++;
        if (inWord) {
          wordCount++;
        }
        break;
      }
      charCount++;
      if (char === ' ') {
        if (inWord) {
          wordCount++;
          inWord = false;
        }
      } else {
        inWord = true;
        if (vowels.includes(char)) {
          vowelCount++;
        }
      }
    }
  
    return {
      length: charCount,
      words: wordCount,
      vowels: vowelCount
    };
  }
