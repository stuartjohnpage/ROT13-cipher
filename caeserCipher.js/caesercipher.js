

function rot13(inputString) {
    const alphabet =
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    const getNewLetterIndex = (letter, alphabet) => {
        const indexOfGivenLetter = alphabet.indexOf(letter)
        const uncorrectedLetterIndex = indexOfGivenLetter + 13
        if(uncorrectedLetterIndex > 25){
            const newLetterIndex = uncorrectedLetterIndex - 26
            return newLetterIndex
        }
        return uncorrectedLetterIndex
    }
    let answerString = ""
    const inputArray = inputString.split("")
    inputArray.forEach((letter)=> {
        if(!alphabet.includes(letter)){
            answerString = answerString + letter
        } else {
            const newLetterIndex = getNewLetterIndex(letter, alphabet)
            console.log(alphabet[newLetterIndex])
            answerString = answerString + alphabet[newLetterIndex]
        }
        
    })
    return answerString
}


console.log(rot13("SERR PBQR PNZC?"))

