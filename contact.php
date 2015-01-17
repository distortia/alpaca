<!DOCTYPE html>
<html lang="en">
<head>
<?php include ('includes/header.php'); ?>

</head>
<body>
  <!-- Nav Bar
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <section id="navbar">
  <?php include ('includes/navbar.php'); ?>
  </section>
  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="container signup">
    <div class="row">
      <div class="one column">
        <label for="Username">Username</label>
      </div>
      <div class="two columns">
        <input class="u-full-width" type="text" placeholder="Username" id="username">
      </div>
    </div>
    <div class="row">
      <div class="one column">
        <label for="Password">Password</label>
      </div>
      <div class="two columns">
        <input class="u-full-width" type="password" placeholder="Password" id="password">
      </div>
    </div>
    <div class="row">
      <div class="one column">
        <label for="Email">Email</label>
      </div>
      <div class="two columns">
        <input class="u-full-width" type="email" placeholder="Email" id="email">
      </div>
    </div>
      <div class="row">
        <div class="three columns">
          <input class="button-primary u-full-width" type="submit" value="Log in">
        </div>
      </div>
    </div>

  <!-- Footer
  –––––––––––––––––––––––––––––––––––––––––––––––––– --> 
  <section id="footer">
   <?php include ('includes/footer.php'); ?>
  </section>
<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
 <!-- Includes
  –––––––––––––––––––––––––––––––––––––––––––––––––– --> 
  <script src="js/script.js" type="text/javascript" charset="utf-8" async defer></script>
</body>
</html>