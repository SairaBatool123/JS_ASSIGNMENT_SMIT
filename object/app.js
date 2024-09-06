// i 
var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }];

for (var key in itemsArray) {
    var items = itemsArray[key]
    var itemsPrice = items.price * items.quantity
    console.log(`The Price of ${items.price} is Rs. ${itemsPrice}`);

}
// ii 
var dumyObject = {
    name: "batool",
    email: "sairazehrag346@gmail.com",
    password: "Saira",
    age: 21,
    gender: "female",
    city: "karachi",
    country: "pakistan"
}
console.log("age" in dumyObject);
console.log("country" in dumyObject);
console.log("firstName" in dumyObject);
console.log("lastname" in dumyObject);

// iii 
function Student(first, last, age, city) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.city = city;
}
var student1 = new Student("Saira" , "batool" , 21 , "karachi");
var student2 = new Student("Sajida" , "batool" , 23 , "karachi");
student2.nationality = "pakistani"
console.log(student1);
console.log(student2);

// iv 
function AreaPopulation(fullName,gender,address,education,profession){
    this.name = fullName;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}
var Add1 = new AreaPopulation("sana" , "female" , "karachi", "inter" ,"teacher")
// Add1.education = `<label>
// <input type="checkbox" id="myCheckbox" name="myCheckbox">
// Check me!
// </label>`
// console.log(Add1.education);

console.log(Add1);
