var x = undefined
try{
    var tryToAccessPropery = x.property // This is faulty because x does is undefined
    console.log("X Property : " + tryToAccessPropery) // This wont execute
    console.log("Crashed.") // This wont execute

}catch(error){
    console.error("an error ocurred : ", error.message)
}

console.log("This will execute.")