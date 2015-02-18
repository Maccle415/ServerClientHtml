<?php

if (isset($_GET['client']))
{
	header("Content-Type:text/plain");
	echo "HEllo " . $_GET['client'] . " this has been sent from the server!!!!";
}

?>