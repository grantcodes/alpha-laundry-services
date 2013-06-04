<?php 
	if (
	isset($_GET['email']) && 
	!empty($_GET['email']) &&
	isset($_GET['name']) && 
	!empty($_GET['name']) &&
	isset($_GET['subject']) && 
	!empty($_GET['subject']) &&
	isset($_GET['message']) && 
	!empty($_GET['message'])
	) {	

		$email = trim($_GET['email']);
		$name = trim($_GET['name']);
		$subject = trim($_GET['subject']);
		$message = trim($_GET['message']);
		$headers = "From: $email \r\n" .
			"Reply-to: $email \r\n" .
			'X-Mailer: PHP/' . phpversion();

		if (mail('info@alphalaundryservices.com', $subject, $message, $headers)) {
			echo 'true';
			exit();
		} else {
			echo 'false';
			exit();
		}

	} else if (
	isset($_POST['email']) && 
	!empty($_POST['email']) &&
	isset($_POST['name']) && 
	!empty($_POST['name']) &&
	isset($_POST['subject']) && 
	!empty($_POST['subject']) &&
	isset($_POST['message']) && 
	!empty($_POST['message'])
	) {	

		$email = trim($_POST['email']);
		$name = trim($_POST['name']);
		$subject = trim($_POST['subject']);
		$message = trim($_POST['message']);
		$headers = "From: $email \r\n" .
			"Reply-to: $email \r\n" .
			'X-Mailer: PHP/' . phpversion();

		if (mail('richmond.grant@gmail.com', $subject, $message, $headers)) {
		// if (mail('info@alphalaundryservices.com', $subject, $message, $headers)) {
			header('#contact?sent');
		} else {
			header('#contact?fail');
		}

	} else if (isset($_POST)) {
			header('#contact?fail');
	} else {
		echo 'false';
		exit();
	}
?>