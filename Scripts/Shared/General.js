function dropDownFunc() {
  
  document.getElementById("myDropdown").classList.toggle("show");
  console.log("ceva");
}

window.onclick = function(e) {

  if (!e.target.matches('.dropbtn')) {
  
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
	  
    }
  }
}