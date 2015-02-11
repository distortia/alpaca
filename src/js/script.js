//Loads the header and footer html files
$("#header").load("includes/header.html");
$("#footer").load("includes/footer.html");

//This function is for the time stamp at the footer.
function getDate() {
    //This gets a new date and assigns it to a variable d
    var d = new Date();
    //This gets the year from the date and sets up my copyright message.
    var n = "Copyright <i class=\"fa fa-copyright\" style=\"font-size: 15px;\"></i> " + d.getFullYear() + " Alpaca Chat";
    //Here, I get the date id in the footer and set the html to the line above.
    document.getElementById("date").innerHTML = n;
  }
  //When the window loads, this hides the login section
$(window).load(function() {
  $("#login-section").hide();

  //When you click the logo, the login section is toggled visible or hidden
  $("#logo").click(function() {
    $("#login-section").toggle();
  });

  $('#registerText').click(function() {
    $(".register").toggle();
  });

  //This calls the getDate function 
  getDate();

  //when you click the register checkbox
  $("#registerCheckbox").click(function() {
    //Checks if the input type is password
    if ($("#registerPassword").attr("type") == "password") {
      //If input type is password, change it to text - which makes it visible
      $("#registerPassword").attr("type", "text");
    } else {
      //otherwise change the type to text
      $("#registerPassword").attr("type", "password");
    }
  });
  //Same as register checkbox
  $("#loginCheckbox").click(function() {

    if ($("#loginPassword").attr("type") == "password") {
      $("#loginPassword").attr("type", "text");
    } else {
      $("#loginPassword").attr("type", "password");
    }
  });

  //Tabs
  $(function() {
    $("#tabs").tabs();
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