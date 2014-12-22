//Gets Year and appens its to footer
window.onload = function getDate() {
    var d = new Date();
    var n = "Copyright <i class=\"fa fa-copyright\" style=\"font-size: 15px;\"></i> " + d.getFullYear() + " Alpaca Chat";
    document.getElementById("date").innerHTML = n;
}