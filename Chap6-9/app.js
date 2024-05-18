//1

var a = 10;

document.write("The value of a is: " + a + "<br>"+"<br>"+"<hr>")

document.write("The value of ++a is: " + ++a + "<br>" +"<br>");
document.write("Now the value of a is: " + a + "<br>" +"<br>")

document.write("The value of a++ is: " + a++ + "<br>" +"<br>");
document.write("Now the value of a is: " + a + "<br>" +"<br>")

document.write("The value of --a is: " + --a + "<br>" +"<br>");
document.write("Now the value of a is: " + a + "<br>" +"<br>")

document.write("The value of a-- is: " + a-- + "<br>" +"<br>");
document.write("Now the value of a is: " + a + "<br>" +"<br>")


//2

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--; //3
// DRY RUN   1  - 0 + 1 + 1 = 3

var result = --a; //1
var result = --a - --b; //1
var result = --a - --b + ++b;  //2
var result = --a - --b + ++b +b; //3

document.write(result)

// 3

var userName = prompt("What is Your Name?");
alert("Good Morning! " + userName);


// 4

var table = +prompt("Enter a number of table you want to print here...", "5");
var counter = 1;
var incr = 1;

document.write(table + " X " + counter++ + " = " + table*incr++ + "<br>" + 
table + " X " + counter++ + " = " + table*incr++ + "<br>" + 
table + " X " + counter++ + " = " + table*incr++ + "<br>" + table + " X " + counter++ + " = " + table*incr++ + "<br>" + table + " X " + counter++ + " = " + table*incr++ + "<br>" + table + " X " + counter++ + " = " + table*incr++ + "<br>" + 
table + " X " + counter++ + " = " + table*incr++ + "<br>" + 
table + " X " + counter++ + " = " + table*incr++ + "<br>" + 
table + " X " + counter++ + " = " + table*incr++ + "<br>" + 
table + " X " + counter++ + " = " + table*incr++);


// 5
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var subj1 = prompt("Enter 1ST Subject Name ");
var subj2 = prompt("Enter 2ND Subject Name ");
var subj3 = prompt("Enter 3RD Subject Name ");

var total = 100;
var sumOfTotal = (total + total+ total);
var obtMark1 = +prompt("Enter Your Number Of " + subj1);
var obtMark2 = +prompt("Enter Your Number Of " + subj2);
var obtMark3 = +prompt("Enter Your Number Of " + subj3);
var finalObtMark = (obtMark1+obtMark2+obtMark3);

var per1 = obtMark1 / total * 100
var per2 = obtMark2 / total * 100
var per3 = obtMark3 / total * 100
var finalPer = (per1+per2+per3)/100*100;

document.write("<table border = '5px'>" + "<tr>"+ "<th>"+ "Subjects" +"</th>" +
"<th>"+ "Total Marks" +"</th>"+ 
"<th>"+ "Obtained Marks" +"</th>"+  
"<th>"+ "Percentage" +"</th>"+ "</tr>" +
"<tr>" + "<td>" + subj1 +"</td>" + "<td>" + total +"</td>" + "<td>" + obtMark1 + "</td>" + "<td>" + per1  + "%"+ "</td>" + "</tr>" +
"<tr>"+"<td>" + subj2 +"</td>" +"<td>" + total +"</td>" + "<td>" + obtMark2 + "</td>" + "<td>" + per2 + "%" + "</td>" + "</tr>"  + 
"<tr>" +"<td>" + subj3 +"</td>" +"<td>" + total +"</td>" + "<td>" + obtMark3 + "</td>" +"<td>" + per3 + "%" + "</td>" + "</tr>" +
"<tr>"+"<td>"+ " " +"</td>"+"<td>"+"<b>"+ sumOfTotal + "</b>"+"</td>" + "<td>"+"<b>"+ finalObtMark +"</b>"+"</td>"+"<td>"+ "<b>"+ finalPer + "%" +"</b>" + "</td>"+"</tr>"+
"</table>");