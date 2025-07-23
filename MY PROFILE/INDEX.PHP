<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name    = htmlspecialchars(trim($_POST["name"]));
  $email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $message = htmlspecialchars(trim($_POST["message"]));

  if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$message) {
    echo "Please fill all fields correctly.";
    exit;
  }

  $to = "andreajohnthuo@gmail.com"; // YOUR EMAIL HERE
  $subject = "New Message from PRESENTER A Website";
  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
  $headers = "From: noreply@presentera.com";

  if (mail($to, $subject, $body, $headers)) {
    echo "Your message has been sent successfully! ✅";
  } else {
    echo "Sorry, something went wrong. Please try again later.";
  }
}
?>
