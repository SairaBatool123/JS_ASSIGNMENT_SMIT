// 2.
function showalert() {
    alert("Thanks For Purchasing!!")
}

function deleteRow() {
    // FOR LINE ONE 
    // var table0 = document.getElementById("zero0").style.display="none"
    // var table1 = document.getElementById("one3").style.display="none"
    document.getElementById("zero").innerHTML = ''
    document.getElementById("one").innerHTML = ''
    document.getElementById("two").innerHTML = ''
    document.getElementById("three").innerHTML = ''

}

// 5.
var counter = 0
function increase() {
    var incr = document.getElementById("counter").innerHTML=counter++
}
function decrease(){
    var decr = document.getElementById("counter").innerHTML=counter--
}