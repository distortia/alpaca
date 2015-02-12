$("#header").load("includes/header.html"); 
$("#footer").load("includes/footer.html");


function getDate() {
    var d = new Date();
     var n = "Copyright <i class=\"fa fa-copyright\" style=\"font-size: 15px;\"></i> " + d.getFullYear() + " Alpaca Chat";
    document.getElementById("date").innerHTML = n;
 }

$( window ).load(function() {
  getDate();

  $(function() {
    $("#tabs").tabs();
  });
  
  $("#login-section").hide();
  $("#logo").click(function() {
    $("#login-section").toggle();
  });

  $('#registerText').click(function() {
    $(".register").toggle();
  });

  $("#registerCheckbox").click(function() {
    if ($("#registerPassword").attr("type") == "password") {
      $("#registerPassword").attr("type", "text");
    } else {
      $("#registerPassword").attr("type", "password");
    }
  });
  $("#loginCheckbox").click(function() {
    if ($("#loginPassword").attr("type") == "password") {
      $("#loginPassword").attr("type", "text");
    } else {
      $("#loginPassword").attr("type", "password");
    }
  });

  $('#tab-header-register').click(function() {
    $(this).removeClass("button-primary");
    $('#tab-header-login').toggleClass("button-primary");
  });
  $('#tab-header-login').click(function() {
    $(this).removeClass("button-primary");
    $('#tab-header-register').toggleClass("button-primary");
  });

});
