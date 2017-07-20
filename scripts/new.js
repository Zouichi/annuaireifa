var nom = document.forms["myForm"];
console.log(nom);

var monSubmit = document.getElementById('mon-submit');
monSubmit.addEventListener('click', traiter_formulaire );

function traiter_formulaire(event) {
	console.log(event);
};

// var monBtn = document.getElementById("addNew");
// monBtn.addEventListener("click", function(event){
// document.getElementById("myForm").classList.toggle("show");
// });