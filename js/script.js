  //Gets Year and appends it to footer
 window.onload = function getDate() {
    var d = new Date();
    var n = "Copyright <i class=\"fa fa-copyright\" style=\"font-size: 15px;\"></i> " + d.getFullYear() + " Alpaca Chat";
    document.getElementById("date").innerHTML = n;

 }

	$("#logo").click(function() {
		$("#login-section").toggle();
	});
//Signup / Login script
//hide the div
$( window ).load(function() {
	$("#header").load("includes/header.html"); 
	$("#footer").load("includes/footer.html"); 
	//$("#navbar").load("includes/navbar.html");


		//Toggle the div with each button press
});
