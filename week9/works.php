<!DOCTYPE html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<html lang="en">
  <head>
    <title>Chuse</title>
    <link rel="stylesheet" href="works.css">
  </head>
  <body>
    <div class="content">
      <div id="header">
        <h1><a href="index.php">Chase</a></h1>
        <p>BSCS - SS211<p>
        <ul>
          <li><a href="works.php">Works</a></li>
          <li><a href="about.php">About</a></li>
          <li><a href="resources.php">Resources</a></li>
        </ul>
        <hr />
      </div>
      <h1>Stuff</h1>
      <p>Not really a portfolio, just stuff I made I think are cool.</p>
      <div id="carousel">
        <a href="https://github.com/chusecubr/rm-docket" target="_blank">
          <img class="carousel_img" src="images/carousel0.png" />
        </a>
        <a href="https://github.com/chusecubr/dotfiles" target="_blank">
          <img class="carousel_img" src="images/carousel1.png" />
        </a>
      </div>
      <div id="carousel_nav">
        <a onclick="move_slide(-1)">&lt</a>
        <a class="carousel_btn" onclick="show_slide(0)">1</a>
        <a class="carousel_btn" onclick="show_slide(1)">2</a>
        <a onclick="move_slide(1)">&gt</a>
      </div>
      <div id="carousel_caption">
        <h3 class="carousel_title">Docket</h3>
        <p class="carousel_desc">An interactive desktop schedule display</p>
        <h3 class="carousel_title">dotfiles</h3>
        <p class="carousel_desc">My WIP linux rice (configuration/setup)</p>
      </div>
      <hr />
      <h2>What I'm working on</h2>
      <p>My most recent GitHub commits.</p>
      <div id="commits">
      </div>
    </div>
    <script src="carousel.js"></script>
    <script src="commits.js"></script>
  </body>
</html>
