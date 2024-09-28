var buttons = document.querySelectorAll(".btn");
// console.log(buttons);

buttons.forEach(function(button){
    button.addEventListener("click" , function(){
        var command = button.dataset["element"]
        // console.log(command);
        if(command === "insertImage" || command === "createLink"){
            var url = prompt("Please Paste A Link!" , "https://google.com")
            document.execCommand(command,true,url)
        }else{
            document.execCommand(command,false,null)
        }
    })
})

var cancelBtn = document.getElementById('cancelButton')
cancelBtn.addEventListener('click', function() {
    var htmlContent = document.getElementById("htmlContent").innerHTML = "";
});

function reloadOnSubmit(){
    var submitBtn = document.getElementById("submit")
    location.reload()
}
