// Question # 1

// i 
var content = document.getElementById('main-content')
// ii 
var content_child = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5] 
// OR 
var childNodes = document.getElementById("main-content").childNodes;
// console.log(childNodes);

// iii 
var render = document.getElementsByClassName('render').innerHTML;
// iv 
var first_name = document.getElementById("first-name").value='Saira'
// v 
var last_name = document.getElementById("last-name").value='Batool'
var email = document.getElementById("email").value='SairaBatool123@gmail.com'


// Question # 2 
// i 
var nodetype = document.getElementById('form-content').nodeType;
// ii 
var childnodetype = document.getElementById('lastName').nodeType;
console.log(childnodetype);
// OR 
var childnodetype = document.getElementById('lastName').childNodes[0].nodeType;
// iii 
var lastName = document.getElementById("lastName").childNodes[0].nodeValue="Zainab"
console.log(lastName);
// iv 
var updatecontent1 = content.firstChild.nextSibling
var updatecontent2 = content.lastChild.previousSibling
// console.log(updatecontent2);
// v
console.log(lastName.nextSibling);
console.log(lastName.previousSibling);
// vi 
var email1 = document.getElementById("email").parentNode;
var email2 = document.getElementById("email").nodeType;
// console.log(email1)