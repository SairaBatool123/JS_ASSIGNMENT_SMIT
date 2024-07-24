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
//     document.write(leapYear("It is a leap Year"))
// }else{
//     document.write(leapYear("It is not a leap Year"))
// }

// 3.
// function areaOfTriangle(a,b,c){
//     var S = 1
//     var area = S*(S-a)*(S-b)*(S-c)
//     return area;
// }
// var result = areaOfTriangle(2,3,5)
// console.log(result)

// 4.
// var a = +prompt("Enter a subj1 marks")
// var b = +prompt("Enter a subj2 marks")
// var c = +prompt("Enter a subj3 marks")

// function marks(math, phy, isl) {
//     function average(subj1, subj2, subj3) {
//         var average = totalmarks / 3
//         return marks;
//     }
//     function percantage(math, phy, isl) {
//         var totalmarks = (subj1 + subj2 + subj3) * 100 / 300
//         return totalmarks
//     }
// }
//  var res = marks(a + b + c)
// console.log(res)
// marks()

// 4.


// 5.
function customFuntion(string, letter) {
    for (let i = 0; i < string.length; i++){
        if (string[i] === letter) {
            return i
        }
} return -1
}
alert(customFuntion("Hello World", "H"))