function validateForm(){
        let x = document.getElementById("fname").value;
        if (x === "") {
          alert("Name must be filled out");
          return false;
        }

        
        let y = document.getElementById("email").value;
        var atposition=y.indexOf("@");  
        var dotposition=y.lastIndexOf(".");  
        if (atposition<1 || dotposition<atposition+2 || dotposition+2>=y.length){
            alert("Please enter a valid e-mail address");
            return false;  
        }
  
          

}
function focusty(element) {
  element.style.background = "blue";
}
function blurty(element) {
  element.style.background = "";
}