<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

  // Prepare email content
  $to = "prismwavesoftware@gmail.com"; // Your Gmail address
  $subject = "New Contact Form Submission";
  $email_body = "Name: " . $name . "\n";
  $email_body .= "Email: " . $email . "\n";
  $email_body .= "Phone: " . $phone . "\n";
  $email_body .= "Message: " . $message . "\n";

  // Send the email
  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  mail($to, $subject, $email_body, $headers);

  // Redirect back to the form or show a success message
  header("Location: /components/ContactForm.js"); // Replace with the URL of your form page
  exit();
}
?>
