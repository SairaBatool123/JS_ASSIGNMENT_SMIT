// i 
var content = document.getElementById('main-content')
// ii 
var content_child = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5] 
// OR 
var childNodes = document.getElementById("main-content").childNodes;
console.log(childNodes);

// iii 
var render = document.getElementsByClassName('render').innerHTML;
// iv 
var first_name = document.getElementById("first-name").value='Saira'
// v 
var last_name = document.getElementById("last-name").value='Batool'
var email = document.getElementById("email").value='SairaBatool123@gmail.com'


// Question # 2 
var node_type = document.getElementById('form-content').nodeType;


console.log(node_type);

