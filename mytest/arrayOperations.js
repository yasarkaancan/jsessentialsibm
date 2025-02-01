const employees = [
    {id : 1, name : 'john', surname : 'doe', job : 'standing', currentBalance : 400},
    {id : 2, name : 'jane', surname : 'asthem', job : 'gourmette', currentBalance : 300},
    {id : 3, name : 'fake', surname : 'gay', job : 'hacker', currentBalance : 200},
    {id : 4, name : 'adam', surname : 'beast', job : 'millionere', currentBalance : 500},
    {id : 5, name : 'ramazan', surname : 'adam', job : 'gambler', currentBalance : 0},
    {id : 6, name : 'osman', surname : 'aktin', job : 'nothing', currentBalance : 1000},
]

const min_value = 100
const max_value = 400

// var foreachExample = employees.forEach((employee) => {console.log('Welcome ' + employee.name + ' ' + employee.surname + ' !')}) // forEach

/*
var mapExample = employees.map((e) => e.currentBalance * 2)
function mapTest(e) {
    return e.currentBalance * 2
}
*/
// var filterExample = employees.filter((e) => e.currentBalance <= max_value && e.currentBalance >= min_value) // filter
// var reduceExample = employees.reduce((total, employee) => total + employee.currentBalance, 0) // reduce (sum)
// var findExample = employees.find((e) => e.currentBalance == 300) // find

console.log(findExample)