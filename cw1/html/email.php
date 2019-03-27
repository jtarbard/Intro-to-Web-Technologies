<?php
  $email_address = $_POST["sc18jt@leeds.ac.uk"];
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];

  $headers = "From: $email_address\n";
  $sent = mail('sc18jt@leeds.ac.uk', 'Feedback Form Submission', $name+"/n"+$subject+"/n"+$email, $headers);
