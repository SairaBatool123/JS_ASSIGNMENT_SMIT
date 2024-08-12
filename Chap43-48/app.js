// 2.
function showalert() {
    alert("Thanks For Purchasing!!")
}

function deleteRow() {
    // FOR LINE ONE 
    // var table0 = document.getElementById("zero0").style.display="none"
    // var table1 = document.getElementById("one3").style.display="none"
    document.getElementsByTagName("tr").innerHTML = ''
    

}

// 5.
var counter = 0
function increase(){
    counter++
    var incr = document.getElementById("counter").innerHTML=counter
    incr=document.getElementById("increase").style.backgroundColor="pink"
}
function decrease(){
    counter--
    var decr = document.getElementById("counter").innerHTML=counter
    incr=document.getElementById("decrease").style.backgroundColor="purple"

}