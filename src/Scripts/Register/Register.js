function addInputElement(pushOnTop, type, placeholder, name, id, value, checked) {

	let inputElement = document.createElement("INPUT");
	
	inputElement.setAttribute("type", type);
	
	//check collision between radio and checkbox
	if (checked !== undefined)
		inputElement.checked = checked;
		
	inputElement.setAttribute("name", name);
	inputElement.setAttribute("id", id);
	
	//check collision between value and placeholder
	if (value !== undefined)
		inputElement.setAttribute("value", value);
	else
		inputElement.setAttribute("placeholder", placeholder);
	
	loginForm = document.getElementById("loginform");
	
	if (pushOnTop === true) {
		loginForm.insertBefore(inputElement, loginForm.firstChild);
	}
	else {
		loginForm.appendChild(inputElement);
	}
}

//pushOnTop: boolean --> decides the palce of the element
function addNewLine(pushOnTop) {
	
	let newLine = document.createElement("br");
	
	if (pushOnTop === true)
		loginForm.insertBefore(newLine, loginForm.firstChild);
	else
		loginForm.appendChild(newLine);
}

function addText(pushOnTop, message) {
	
	let text = document.createTextNode(message);
	
	if (pushOnTop === true)
		loginForm.insertBefore(text, loginForm.firstChild);
	else
		loginForm.appendChild(text);
}

function addDonationRange() {
	
	let yesdonation = document.getElementById("yesdonation");
	let noDonation = document.getElementById("nodonation");
	let donationRange = document.createElement("INPUT");
	
	donationRange.setAttribute("type", "range");
	donationRange.setAttribute("id", "donationrange");
	loginForm.insertBefore(donationRange, noDonation.nextSibling.nextSibling.nextSibling);

}

function removeDonationRange() {

	loginForm.removeChild(document.getElementById("donationrange"));
}

function sweetEmailCheck() {
	
	let email = document.getElementById("email").value;
	let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
	//check validation for email
	if (!re.test(String(email).toLowerCase()))
		Swal.fire({
			title:'Error!',
			text:'The e-mail is incorrect!',
			type:'error',
			confirmButtonText:'Ok'
			});
}

function checkEmail() {
	
	let email = document.getElementById("email").value;
	let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
	if (!re.test(String(email).toLowerCase()))
		document.getElementById("email").reportValidity();
}

function changeBackgroundColor() {
	
	colorSetter = document.getElementById("colorsetter");
	
	document.getElementsByClassName("side")[0].style.backgroundColor = colorSetter.value;
}

function preventLogin(event) {
	
	if (document.getElementById("terms").checked === false)
		event.preventDefault();
}

function saveUserData() {
	
	let xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "", true);
  xhttp.send();
}






//set ajax function to be called by submit button

const contactForm = document.getElementById("loginform");

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

	var request = new XMLHttpRequest();
	
	
	var url = "http://localhost:5000/submit-data";
	request.open("POST", url, true);
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.onreadystatechange = function () {
		if (request.readyState === 4 && request.status >= 200 & request.status < 300) {
			var jsonData = JSON.parse(request.response);
			console.log(jsonData);
		}
	};
	var name =  document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	


	var data = JSON.stringify({"name": name, "email": email, "password": password});


	request.send(data);

});  












//add in login form the input elements

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

//set event listeners for important elements in login form

document.getElementById("yesdonation").addEventListener("change", addDonationRange);
document.getElementById("nodonation").addEventListener("change", removeDonationRange);
document.getElementById("submit").addEventListener("click", function (){ setTimeout(sweetEmailCheck, 500);});
document.getElementById("submit").addEventListener("click", preventLogin);
document.getElementById("email").addEventListener("input", checkEmail);
document.getElementById("colorsetter").addEventListener("change", changeBackgroundColor);