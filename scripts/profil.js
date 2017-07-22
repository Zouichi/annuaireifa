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
var javascript = document.getElementById("javascript");
var fav_web = document.getElementById("fav_web");
var fav_web_why = document.getElementById("fav_web_why");
var fav_app = document.getElementById("fav_app");
var fav_app_why = document.getElementById("fav_app_why");
var before_ifa = document.getElementById("before_ifa");
var why_ifa = document.getElementById("why_ifa");
var contact_mail = document.getElementById("contact_mail");

nom.innerHTML = 'Nom :<br/>' + moneleve.nom;
prenom.innerHTML = 'Prénom :<br />' + moneleve.prenom;
javascript.innerHTML = 'Avez-vous déjà fait du JavaScript ?<br />' + moneleve.javascript;
fav_web.innerHTML = 'Site web favori :<br />' + moneleve.fav_web;
fav_web_why.innerHTML = 'Pourquoi ?<br />' + moneleve.fav_web_why;
fav_app.innerHTML = 'Application favorite :<br />' + moneleve.fav_app;
fav_app_why.innerHTML = 'Pourquoi ?<br />' + moneleve.fav_app_why;
before_ifa.innerHTML = 'Qu\'avez-vous fait avant l\'IFA ?<br />' + moneleve.before_ifa;
why_ifa.innerHTML = 'Pourquoi choisir l\'IFA ?<br />' + moneleve.why_ifa;
contact_mail.innerHTML = 'Contact mail :<br />' + moneleve.contact_mail;