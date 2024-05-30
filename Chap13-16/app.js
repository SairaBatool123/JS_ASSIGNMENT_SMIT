// #ARRAYS

// 1.
// var studentName = [];

// 2.
// var futureStudentNamesObject = new Array();

// 3.
// var familyMember = ["Tajmaul","Shafqat","Shahzad" , "Saira" ,"Sajida","Bilquis Fatima"];

// 4.
// var familyMemberInNumbers= [1,2,3,4,4,8];

// 5.
// var booleanArray = [True , False];

// 6.
// var mixedArray = ["saira" , "batool", 1 ,2 ,3 , False];

// 7.
// document.write("<h1>" + "Qualifications:" + "</h1>")

// var quali = ["1) SSC", "2) HSC", "3) BCS" , "4) BS" , "5) BCOM" , "6) MS" , "7) M.Phil" , "8) PHD"]

// document.write(quali[0]) 
// document.write("<br>")
// document.write(quali[1]) 
// document.write("<br>")
// document.write(quali[2]) 
// document.write("<br>")
// document.write(quali[3]) 
// document.write("<br>")
// document.write(quali[4]) 
// document.write("<br>")
// document.write(quali[5]) 
// document.write("<br>")
// document.write(quali[6]) 
// document.write("<br>")
// document.write(quali[7]) 

// console.log(quali) 

// 8.
// var nameOfStudent = ["Saira" , "Sajida" , "Shehzad"];
// var score = [320 , 230 , 480];

// var totalMarks = 500;

// document.write("Score of " + nameOfStudent[0] + " is " + score[0] + "." + " Percentage: " + score[0] / totalMarks * 100 + "%" + "<br>")
// document.write("Score of " + nameOfStudent[1] + " is " + score[1] + "." + " Percentage: " + score[1] / totalMarks * 100 + "%" + "<br>")
// document.write("Score of " + nameOfStudent[2] + " is " + score[2] + "." + " Percentage: " + score[2] / totalMarks * 100 + "%")

// 9.
// var colorName = [" Red " , " Green " , " Blue " , " Pink "]

// document.write(colorName + "</br>");

// // unshift add a new element to the begining of the array
// // shift remove the first element of an array
// // push add a new element/item to the end of the array 
// // pop remove the last element of an array 

// // a. 
// var begining = prompt("What Color would you add in the begining?");
// colorName.unshift(begining);
// document.write(colorName + "</br>")

// // b. 
// var end = prompt("What Color would you add in the end?");
// colorName.push(end);
// document.write(colorName  + "</br>")

// // c.
// colorName.unshift("Orange" , "White");
// document.write(colorName + "</br>")

// // d.
// colorName.shift();
// document.write(colorName  + "</br>")

// // e. 
// colorName.pop();
// document.write(colorName  + "</br>")

// f. 
var newColorAdd = prompt("What Color would you add in the desired position?");
colorName.splice(newColorAdd)
document.write(colorName  + "</br>");

// g. 
var colorposition = +prompt("Which color index you wanna delete & how many color you wanna delete & remove the same number of color of that position?");
colorName.splice(colorposition);
document.write(colorName + "</br>")

// 10.
// var studentscores = [320 , 230 , 480 , 120] 
// document.write("Scores of Students : " + studentscores + "<br>");
// studentscores.sort()
// document.write("Ordered Scores of Students : " + studentscores);

// 11.
// var cityName = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"]
// document.write("Cities list:" + "<br>");
// document.write(cityName + "<br>");

// document.write("Selected cities list:" + "<br>");
// selectedCity = cityName.slice(2,4);
// document.write(selectedCity);

// 12.
// var sentence = ["This" , "is" , "my" , "cat"];
// document.write("Array:" + "<br>" + sentence + "<br>");

// afterJoining = sentence.join(" ")
// document.write("Array:" + "<br>" + afterJoining);


// 13. FIFO FOR SHIFT()
// var Devices = ["keyboard" , "mouse" , "printer" ,"monitor"]
// var shift;

// document.write("Devices:" + "<br>");
// document.write(Devices + "<br>" + "<br>");
// document.write("Out:" + "<br>");
// shift = Devices.shift()
// document.write(shift + "<br>");
// document.write("Out:" + "<br>");
// shift = Devices.shift()
// document.write(shift + "<br>");
// document.write("Out:" + "<br>");
// shift = Devices.shift()
// document.write(shift + "<br>");
// document.write("Out:" + "<br>");
// shift = Devices.shift()
// document.write(shift);
 
// 14. LIFO FOR POP()
// var devices = ["keyboard" , "mouse" , "printer" , "monitor"]

// document.write("Devices:" + "<br>");
// document.write(devices);
// document.write("<br>");
// document.write("<br>");

// var removeitem = devices.pop()
// document.write("Out:" + "<br>");
// document.write(removeitem + "<br>");
// document.write("Out:" + "<br>");
// removeitem = devices.pop()
// document.write(removeitem + "<br>");
// document.write("Out:" + "<br>");
// removeitem = devices.pop()
// document.write(removeitem + "<br>");
// document.write("Out:" + "<br>");
// removeitem = devices.pop()
// document.write(removeitem);

// 15.
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

// document.write("<select>" + '<option value = '+phoneManufacturers[0]+'>' + phoneManufacturers[0] + '</option>' + '<option value = '+phoneManufacturers[1]+'>' + phoneManufacturers[1] + '</option>' + '<option value = '+phoneManufacturers[2]+'>' + phoneManufacturers[2] + '</option>' + '<option value = '+phoneManufacturers[3]+'>' + phoneManufacturers[3] + '</option>' +
// '<option value = '+phoneManufacturers[4]+'>' + phoneManufacturers[4] + '</option>'
// + '<option value = '+phoneManufacturers[5]+'>' + phoneManufacturers[5] + '</option>' +  "</select>")


