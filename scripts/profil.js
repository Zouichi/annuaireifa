console.log('nouveau script profil');
var dataList = MyJson;
var url = window.location;
var eleveId = url.hash;

eleveId  = eleveId.substring(1);
console.log(typeof eleveId);

eleveId  = parseFloat(eleveId);
console.log(typeof eleveId);

var myIndex = dataList.findIndex(function(i){ return i.id === eleveId });
console.log(myIndex);

var moneleve = dataList[myIndex];
console.log(moneleve);

var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");

nom.innerHTML = moneleve.nom;
prenom.innerHTML = moneleve.prenom;