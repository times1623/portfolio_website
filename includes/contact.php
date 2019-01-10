<?php

	function send_email(){
		//Email validation:checking reuqiresd fields

		if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])){
			
			echo 'You missing some required fields';
			exit;


		}

		if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
				echo 'Your Email is not valid';
				exit;
		}

		$to = 'c_lee23@fanshaweonline.ca';
		$subject = 'This is a email from '.$_POST['name'];
		$message =  $_POST['message'];
		$headers = 'From:'.$_POST['email'];
        
        mail($to, $subject, $message, $headers);
        header("Location: ../index.html?mailsend");

	}

	send_email();


?>