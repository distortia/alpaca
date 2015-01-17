//Gets Year and appends it to footer
window.onload = function getDate() {
    var d = new Date();
    var n = "Copyright <i class=\"fa fa-copyright\" style=\"font-size: 15px;\"></i> " + d.getFullYear() + " Alpaca Chat";
    document.getElementById("date").innerHTML = n;
}

//Signup / Login script
//<div class="sixteen columns"> <div class="four columns offset-by-six"> <p>Login Stuff goes here!</p> </div> </div>
$("#signin").click(function () {
  $("#nav").append('<p> Please work </p>');
});