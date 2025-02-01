var text = 'A cozy fox appeared in the calm town of manhattan.'

var textIndexOf = text.indexOf('calm') // 27
var textIncludes = text.includes('calm') // True

var textSubstring = text.substring(0, 6) // A cozy [0, 5] or [0, 6)
var textSlice = text.slice(7) // [7, end]

var textReplace = text.replace('fox', 'kitten') // replaces fox with kitten

const csvData = 'Alice, 25, New York; John, 30, Manhattan; Adam, 21, California'
const peopleArray = csvData.split(';') // ['Alice, 25, New York', 'John, 30, Manhattan', 'Adam, 21, California'] splits string into array

const textToTrim = '   hello world   '
var textTrimmed = textToTrim.trim() // Trims the whitespaces at the beggining and end of the text

console.log()