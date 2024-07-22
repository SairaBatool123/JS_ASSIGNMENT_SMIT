// 1.
var integer = +prompt("enter a positive integer")
var roundOfInteger = Math.round(integer)
var floorInteger = Math.floor(integer)
var ceilInteger = Math.ceil(integer)

document.write("number " + integer + "<br>")
document.write("round off value: " + roundOfInteger + "<br>")
document.write("floor value: " + floorInteger + "<br>")
document.write("ceil value: " + ceilInteger)

2.
var negFloat = +prompt("Enter a negative floating point")
var negFloatRound = Math.round(negFloat)
var negFloatFloor = Math.floor(negFloat)
var negFloatCeil = Math.ceil(negFloat)

document.write("number: " + negFloat + "<br>")
document.write("round off value: " + negFloatRound + "<br>")
document.write("floor value: " + negFloatFloor + "<br>")
document.write("ceil value: " +  negFloatCeil + "<br>")

// 3.
var inputTaken = +prompt("Enter any number you wanna write")
document.write("The absolute value of " + inputTaken + " is " + Math.abs(inputTaken))

// 4.
var dice = (Math.random()*6)+1
var diceFloor = Math.floor(dice)
var diceCeilAno = Math.ceil(dice)
document.write("random dice value: " + diceFloor + "</br>")
document.write("random dice value: " + diceCeilAno)

// 5.
var number = (Math.random()*2)+1
var num1 = Math.floor(number)
if(num1 == 2){
    document.write(num1 + "</br>" + "Random Coin value: Heads" )
}else{
    document.write(num1 + "</br>" + "Random Coin value: Tails" )
}

// 6.
var num = Math.random()*100
var numCeil = Math.ceil(num)
document.write("random number between 1 and 100: " + numCeil)

// 7.
var weight = +prompt("enter your weight in kilograms")
var userWeight = parseInt(weight)
document.write("The weight of user is " + userWeight + " kilograms")

// 8.
var secretnum = Math.random()*10
var input = +prompt("Enter a number between 1 to 10")
// var is = Math.ceil(secretnum)
// document.write(is) //for Checking Purpose
if(input == Math.ceil(secretnum)){ // is
document.write("Congratulations!!!")
}else{
    document.write("Try Again!!!")
}