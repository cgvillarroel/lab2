<!DOCTYPE html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<html lang="en">

<head>
  <title>Chuse</title>
  <style>
    <?php include "style.css" ?>
  </style>
</head>

<body>
  <div class="content">
    <?php include "header.html" ?>
    <hr />
    <h1>Guest List</h1>
    <p>
      Can't find your name?
      <a href="form.php">Register as a guest here.</a>
    </p>
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "myDB";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $sql_query = "SELECT id, name, email, website, comment, gender FROM MyGuests";
    $result = $conn->query($sql_query);

    if ($result === FALSE) {
      echo "Guest table does not exist.";
    } elseif ($result->num_rows > 0) {
      // output data of each row
      echo "<ul>";
      while ($row = $result->fetch_assoc()) {
        echo "<li>id: " . $row["id"];
        echo "<ul>";
        echo "<li>" . "Name: " . $row["name"] . "</li>";
        echo "<li>" . "Email: " . $row["email"] . "</li>";
        echo "<li>" . "Website: " . $row["website"] . "</li>";
        echo "<li>" . "Comment: " . $row["comment"] . "</li>";
        echo "<li>" . "Gender: " . $row["gender"] . "</li>";
        echo "</ul>";
        echo "</li>";
      }
      echo "</ul>";
    } else {
      echo "0 results";
    }
    $conn->close();
    ?>
  </div>
</body>

</html>
