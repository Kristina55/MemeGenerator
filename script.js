

document.addEventListener("DOMContentLoaded", function(){
var button = document.getElementById("myButton");

    button.addEventListener("click", function(){
    var topText = document.getElementById("topText").value;
    document.getElementById('firstDiv').innerHTML = topText;
    document.getElementById("formId").submit();  
  });
});

 


 