// Math object

const number = 3.6

const rounded = Math.round(number) // rounded to nearest integer
const ceil = Math.ceil(number) // the min number greater or equal to number
const floor = Math.floor(number) // the max number less or equal to number

const base = 2
const exponent = 3

const power = Math.pow(base, exponent)
const squareroot = Math.sqrt(base)
const naturallog = Math.log(base) // ln(2)

const randomNumber = Math.random() // Generates a random number between 0 and 1 including decimal values (eg. 0.5392)

// Lets build a simple random quote generator.

let quotes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
function getRandomQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
}

// Date Object

const currentDate = new Date() // Current date and time 
const specificDate = new Date(2023, 0, 15) // January 15 2023
const fromMiliseconds = new Date(1738442630 * 1000) // From miliseconds since the epoch (time passed as miliseconds since 1 January 1970) (this will show current date because it adds up the miliseconds given to the epoch date and converts it to human readable date)

// Some important methods that can be used on the Date object

const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()
const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()

const formattedDate = date.toLocaleDateString() // 1.02.2025
const formattedTime = date.toLocaleTimeString() // 23:53:05

// Some example arithmetic operations on Date object

const changebleDate = new Date()
changebleDate.setFullYear(2024) // Set year to 2024
changebleDate.setDate(changebleDate.getDate() - 7) // Substract 7 days from current days of the date

const futureDate = new Date()
futureDate.setDate(futureDate.getDate() + 30) // Date 30 days from now

    // Timing functions

// setTimeout usage

setTimeout(function() {
    console.log('hello')
}, 2000) // sets a timeout after 2000 miliseconds / 2 seconds so console.log('hello') will appear after 2 seconds.

// setInterval usage

let count = 1
const intervalId = setInterval(function() {
    console.log('count : ' + count)
    count++
    if (count > 5){
        clearInterval(intervalId) // stop after 6 iterations
    }
}, 1000) // Runned every 1000 milisecond / 1 second