
// 1.
var firstName = prompt("Enter Your First Name")
var lastName = prompt("Enter Your Last Name")

var fullName = firstName + " " + lastName
alert("Hi " + fullName)

// 2.
var userInput = prompt("My favorite phone is" , " Samsang Model 2")
document.write(userInput.length)

// 3.
var nationality = "Pakistani"
document.write("String: " + nationality + "<br>")
for (let i = 0; i < nationality.length; i++){
    if(nationality[i] == "n"){
        document.write("Index of 'n' : " + nationality.indexOf("n"))
    }
} 

// 4.
var word = "Hello World"
document.write(word + "</br>")
document.write("Last index of 'l' : " + word.lastIndexOf("l"))

// 5.
var userWord = "Pakistan"
document.write("String" + userWord + "</br>");
document.write("Character at index 3: " + userWord.charAt(3))

// 6.
var firstName = prompt("Enter Your First Name")
var lastName = prompt("Enter Your Last Name")

var fullName;
alert("Hi " + fullName.concat(firstName+lastName))

// 7.
var city = "Hyderabad"
document.write("City: " + city + "</br>" + "After Replacement: " + city.replace("Hyder","Islam"))

// 8.
var message = "Ali and Shami are best friends. thy play cricket and football together";
document.write(message.replaceAll("and" , "&"))

// 9.
var numInString = "472" 
var numInNum = Number(numInString)
document.write("Value: " + numInString + "</br>");
document.write("Type: " + typeof(numInString) + "</br>");
document.write("Value: " + numInNum + "</br>");
document.write("Type: " + typeof(numInNum) + "</br>");

// 10.
var userChoice1 = prompt("What do you want to eat?");
document.write("User input: " + userChoice1 + "</br>")
document.write("Upper case: " + userChoice1.toUpperCase())

// 11.
var userChoice2 = prompt("What do you want to eat?");
document.write("User input: " + userChoice2 + "</br>")
document.write("Upper case: " + userChoice2.toLowerCase())

// 12. slice / replace
var num = 35.36
document.write("Number: " + num + "</br>")
num = num.toString()
document.write("Result: " + num.replace(".",""))

// 13.
var userName = prompt("please enter your name")
for (let i = 0; i < userName.length; i++) {
    let element = userName[i].charCodeAt();
    if (element === 33 || element === 44 || element === 46 || element === 64) {
        console.log("invalid")
    }
}

// 14.
var bakery = prompt("Enter Your Favorite Item")
var flag = true;
A = ["cake", "apple pie", "cookie", "chips", "patties"]
for (let i = 0; i < A.length; i++) {
    if(bakery === A[i]){
        flag = false;
        document.write(bakery + " is avaiable at index " + i + " in our bakery")
    }
}
if(flag === true){
    document.write("SORRY " + bakery + " is avaiable in our bakery")
}

// 15.
let password = prompt("Enter your password: ");

if (isNaN(password[0]) && password.length >= 6) {
  alert("Password has been set !!!");
} else if (password.length < 6) {
  if (!isNaN(password[0])) {
    alert("Invalid password , because it can not start from a number ");
  }
  alert("Invalid Password , Password should must be of 6 characters atleast");
} else if (!isNaN(password[0])) {
  alert("Invalid password , because it can not start from a number ");
}

// 16.
var uni = "University of Karachi"
var myArray = uni.split(" ")

for (let i = 0; i < uni.length; i++) {
    let element = uni[i];
    console.log(element)
}
// this output will occur in console not in documentits a reason behind this


// 17.
var inp = prompt("Enter a any word and find last alphabet/character")
document.write(inp.charAt(inp.length-1))


// 18. 
var str = "The quik brown fox jumps over the lazy dog"
var targetedWord = "the"
var strLower = str.toLowerCase()
var final = strLower.split(" ")
var count = 0
for (var i = 0; i < final.length; i++) {
    if (final[i] === targetedWord) {
        count++
    }

}
document.write("Text: " + str + "<br>" + "There are " + count + " occurrence(s) of word 'the'")