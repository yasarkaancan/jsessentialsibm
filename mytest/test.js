class Car{
    constructor(brand, model_name, model_year, model_specialties){
        this.brand = brand
        this.model_name = model_name
        this.model_year = model_year
        this.model_specialties = model_specialties
        this.creationTime = Date()
    }

    printFullDetails(test){
    console.log('Brand name : ' + this.brand + '\nModel Name : ' + this.model_name + '\nModel Year : ' + this.model_year + '\nModel Specialties : ' + this.model_specialties)
    }
}

function CarF(brand, model_name, model_year, model_specialties){
    this.brand = brand
    this.model_name = model_name
    this.model_year = model_year
    this.model_specialties = model_specialties
    this.creationTime = Date()

}

var myCar = new Car('Toyota', 'Supra', 2006, 'Full-packet')
var myCarF = new CarF('Mercedes Benz', 'S200', 2014, 'Singleton-packet')

console.log(myCar)
console.log(myCarF)

myCar.printFullDetails()