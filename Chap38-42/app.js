// // 1.
// function power(num,power){
//     var p = num**power 
//     return p;
// }
// var a = +prompt("Enter a number")
// var b = +prompt("Enter a power")
// var value = power(a,b)
// document.write("The founded result is "+ value)

// // 2.
// function leapYear(a){
//     var Lp = a
//     return Lp;
// }
// var ret = +prompt("Enter a year")
// if(ret % 4==0){
//     document.write("It is a leap Year")
// }else{
//     document.write("It is not a leap Year")
// }

// 3.
function areaOfTriangle(a,b,c){
    var S = 1
    var area = S*(S-a)*(S-b)*(S-c)
    return area;
}
var result = areaOfTriangle(2,3,5)
console.log(result)

