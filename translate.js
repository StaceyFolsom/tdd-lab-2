function translate(word) {
    word = word.toLowerCase();
    
    const vowels = ["a", "e", "i", "o", "u"];
    const wordArray = word.split('');
    let firstLetter = word.charAt(0);
    let vowelFirst = true;

    if (vowels.includes(firstLetter)) {
        word = `${word}way`;
    } else {
        do {
            wordArray.push(wordArray.shift());
            firstLetter = wordArray[0];
            vowelFirst = vowels.includes(firstLetter);
        } while (!vowelFirst);
        word = wordArray.join("") + "ay";
    }

    return word;
}