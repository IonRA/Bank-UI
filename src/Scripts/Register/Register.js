function addInputElement(pushOnTop, type, placeholder, name, id, value, checked) {

	var inputElement = document.createElement("INPUT");
	
	inputElement.setAttribute("type", type);
	
	if (checked !== undefined)
		inputElement.checked = checked;
		
	inputElement.setAttribute("name", name);
	inputElement.setAttribute("id", id);
	
	if (value !== undefined)
		inputElement.setAttribute("value", value);
	else
		inputElement.setAttribute("placeholder", placeholder);
	
	loginForm = document.getElementById("loginform");
	
	if (pushOnTop === true)
		loginForm.insertBefore(inputElement, loginForm.firstChild);
	else
		loginForm.appendChild(inputElement);
}

function addNewLine(pushOnTop) {
	
	var newLine = document.createElement("br");
	
	if (pushOnTop === true)
		loginForm.insertBefore(newLine, loginForm.firstChild);
	else
		loginForm.appendChild(newLine);
}

function addText(pushOnTop, message) {
	
	var text = document.createTextNode(message);
	
	if (pushOnTop === true)
		loginForm.insertBefore(text, loginForm.firstChild);
	else
		loginForm.appendChild(text);
}


addInputElement(true, "password", "Repeat password", "repeat-password", "repeat-password");
addInputElement(true, "password", "Password", "password", "password");
addInputElement(true, "email", "Email", "email", "email");
addInputElement(true, "text", "Name", "name", "name");
addInputElement(false, "radio", "Yes", "donation", "yesdonation", "yes");
addText(false, "Yes");
addInputElement(false, "radio", "No", "donation", "nodonation", "no", true);
addText(false, "No");
addNewLine(false);
addNewLine(false);
addInputElement(false, "checkbox", "Terms", "terms", "terms", "agree", false);
addText(false, "I agree with the terms and conditions");
addNewLine(false);
addNewLine(false);
addInputElement(false, "submit", "Submit", "submit", "submit", "Log In");