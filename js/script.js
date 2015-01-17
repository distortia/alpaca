//Gets Year and appends it to footer
window.onload = function getDate() {
    var d = new Date();
    var n = "Copyright <i class=\"fa fa-copyright\" style=\"font-size: 15px;\"></i> " + d.getFullYear() + " Alpaca Chat";
    document.getElementById("date").innerHTML = n;
}

//Signup / Login script
//hide the div
$( window ).load(function() {
  $( "#login-section" ).hide();
   //Toggle the div with each button press
 $("#signin").click(function() {
	$("#login-section").toggle();
});


});
 
 
