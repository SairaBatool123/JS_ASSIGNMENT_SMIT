// student form
document.getElementById('studentForm').addEventListener('submit',function(e){
    e.preventDefault()
    var name = document.getElementById('name').value
    var age = document.getElementById('age').value
    var grade = document.getElementById('class').value

//table
var table = getElementById('studentTable').querySelector('tbody')
var newTr = table.insertRow();

var td1 = newTr.insertCell(0)
var td2 = newTr.insertCell(1)
var td3 = newTr.insertCell(2)
var td4 = newTr.insertCell(3)

// here we get the data from the (variable) of student form 
td1.innerHTML = name
td2.innerHTML = age
td3.innerHTML = grade
td4.innerHTML = `<button onclick="editRow()">Edit</button><button  onclick="deleteRow()">Delete</button>`

document.getElementById('studentForm').reset()

// end of student form
})
function deleteRow(button){
    var tr = button.parentNode.parentNode;
    tr.parentNode.removeChild(tr)
}
