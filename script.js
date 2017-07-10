var data_source = MyJson.eleve;
console.log(data_source);
var ma_liste = document.getElementById("liste");
console.log(ma_liste);
data_source.forEach(function(item) {
    console.log(item);
    var html = document.createElement("li");
    html.innerHTML = item.nom + ' ' + item.prenom;
    ma_liste.appendChild(html);
 });
