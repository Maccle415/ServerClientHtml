function sendToServer()
{
	var name = document.getElementByID("client").value;
	document.getElementByID("serverResponse").setAttribute("src", "server.php?client=" + name);
	
	getInnerHTML();
	
}

function getInnerHTML()
{
	document.getElementByID("server").innerHTML = document.getElementByID("serverResponse").innerHTML;
}