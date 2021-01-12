<?php
$toemail = 'info@ssosuomi.fi';
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$honeyPot = $_POST['humans'];
if (trim($honeyPot) != '') {
    // This is a spam robot. Take action!
    exit('Viestiä ei voitu lähettää');
}

if(mail($toemail, $name, $message, 'Reply-To: ' . $email)) {
	echo 'Viestisi on lähetetty. Paljon kiitoksia!';
} else {
	echo 'Viestiäsi ei pystytty lähettämään :( Kokeile uudelleen, tai laita sähköpostia!';
}

header('Content-Type: text/html;charset=UTF-8');


?>
