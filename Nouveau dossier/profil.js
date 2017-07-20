console.log('nouveau script profil');
var eleve = MyJson.eleve;
var url = window.location;
var eleveId = url.hash;

eleveId = eleveId.substring(1);
console.log(typeof eleveId);

eleveId = parseFloat(eleveId);
console.log(typeof eleveId);

var myIndex = eleve.findIndex(function(i){ return i.id === eleveId });
console.log(myIndex);

// je cherche l'élève correspondant à l'index
var monuser = eleve[myIndex];
console.log(monuser);

// je cherche les elements a binder
var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var javascript = document.getElementById("javascript");
var fav_web = document.getElementById("fav_web");
var fav_web_why = document.getElementById("fav_web_why");
var fav_app = document.getElementById("fav_app");
var fav_app_why = document.getElementById("fav_app_why");
var before_ifa = document.getElementById("before_ifa");
var why_ifa = document.getElementById("why_ifa");
var contact_mail = document.getElementById("contact_mail");

// je remplis avec le contenu de l'objet mon user
nom.innerHTML = 'Nom :<br />' + monuser.nom;
prenom.innerHTML = 'Prénom :<br />' + monuser.prenom;
javascript.innerHTML = 'Avez-vous déjà fait du JavaScript ?<br />' + monuser.javascript;
fav_web.innerHTML = 'Site web favori :<br />' + monuser.fav_web;
fav_web_why.innerHTML = 'Pourquoi ?<br />' + monuser.fav_web_why;
fav_app.innerHTML = 'Application favorite :<br />' + monuser.fav_app;
fav_app_why.innerHTML = 'Pourquoi ?<br />' + monuser.fav_app_why;
before_ifa.innerHTML = 'Qu\'avez-vous fait avant l\'IFA ?<br />' + monuser.before_ifa;
why_ifa.innerHTML = 'Pourquoi choisir l\'IFA ?<br />' + monuser.why_ifa;
contact_mail.innerHTML = 'Contact mail :<br />' + monuser.contact_mail;

console.log(window.location);