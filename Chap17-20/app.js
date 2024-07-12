// 1.
var arr = [[], [[], []]];

// 2.
var array = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    document.write(element, "</br>")

}

// 3.
for (let i = 1; i <= 10; i++) {
    const element = i
    console.log(i)

}

// 4.
var table = +prompt("Enter any number you want to print here")
var num = +prompt("Enter a length of a table")
console.log("Multiplication table of" + table);
console.log("length" + num);

for (let i = 1; i <= num; i++) {
    console.log(table + "x" + i + "=" + table * i);
}

// 5.
let fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i];
    console.log(element)
}
for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i];
    console.log("Element at index " + i + " is " + element)
}

// 6.
document.write("<h1>Counting:</h1>")
for (let i = 1; i <= 15; i++) {
    document.write(i + ",")
}

document.write("<h1>Reverse Counting:</h1>")
for (let i = 10; i >= 1; i--) {
    document.write(i + ",");
}

document.write("<h1>Even:</h1>")
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + ",")
    }

}

document.write("<h1>Odd:</h1>")
for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        document.write(i, ",")
    }
}

document.write("<h1>Series:</h1>")
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i, "k, ")

    }
}

// 7.
var items = ["cake", "apple pie", "cookie", "chips", "patties"]
var flagVar = false;
var userInput = prompt("What do you want?")
for (let i = 0; i < items.length; i++) {
    const element = items[i];
    if (element === userInput) {
        flagVar = true;
        console.log("cookies is available at index " + i
            + " in our bakery");
    }
}
if (flagVar === false) {
    console.log("Sorry Not Available");
}


// 8.
var A = [24, 53, 78, 91, 12]
var largest = A[0]
for (let i = 0; i < A.length; i++) {
    if (A[i] > largest) {
       largest = A[i];
    }
}        
console.log("Array items : " + A );
console.log("The largest number is " + largest)

// 9.
var userArr = [24, 53, 78, 91, 12]
var smallest = userArr[0]
for (let i = 0; i < userArr.length; i++) {
    if (userArr[i] < smallest) {
       smallest = userArr[i];
    }
}        
console.log("Array items : " + userArr );
console.log("The smallest number is " + smallest)


//10.
var tableIs = 5
for (let i = 1; i <= 20; i++) {
    document.write(tableIs * i, ", ")
}