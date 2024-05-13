// 1.
var a,b,c

// 2. "CASE SENSITIVE"
// LEGAL
// letters,numbers,dollar sign,underscore 
var _saira;
var saira_batool;
var userName;
var $ana;
var num1;


// ILLEGAL
// spaces,keyword,number could not in start,any special character except of $ and _ 
// var Saira BAtool;
// var 12sana;
// var @sana;
// var var;
// var sana 12324;


// 3.
document.write("<h1>"+ "Rules for naming JS variables"  +"</h1>");
document.write("<p>"+ "Variable names can only contain numbers, $ and _ . For example $my_1stVariable" +"</p>");
document.write("<p>"+"Variables must begin with a letter,$ or _ . For example $name, _name or name"+"</p>");
document.write("<p>"+"Variable names are case sensitive"+"</p>");
document.write("<p>"+"Variable names should not be JS keywords"+"</p>");
