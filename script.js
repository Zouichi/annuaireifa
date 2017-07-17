var data_source = MyJson.eleve;
console.log(data_source);
var ma_liste = document.getElementById("liste");
console.log(ma_liste);
data_source.forEach(function(item) {
    console.log(item);
    var html = document.createElement("li");
    html.innerHTML = item.nom + ' ' + item.prenom;
    html.classList.add('élève');
    html.setAttribute("data-idEleve", item.id);
    html.addEventListener("click", detectClick);
    ma_liste.appendChild(html);
 });

function detectClick(event){
	console.log(this);
	console.log(event);
	console.log(event.target);
	var myTarget = event.target;
	console.log(myTarget.getAttribute("data-idEleve"));
	window.location = "profil.html" + "#" + myTarget.getAttribute("data-idEleve");
}
