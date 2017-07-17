console.log('nouveau script profil');
var dataList = MyJson;
var url = window.location;
var eleveId = url.hash;
// console.log(url);
// console.log("Je suis sur la page profil de l'élève avec l'id : " + eleveId);

eleveId = eleveId.substring(1);
console.log(typeof eleveId);

eleveId = parseFloat(eleveId);
console.log(typeof eleveId);

var myIndex = dataList.findIndex(function(i){ return i.id === eleveId });
console.log(myIndex);

// dataList.forEach(function(item){
// 	if(item.id === parseFloat(eleveId)){
// 		console.log("J'ai trouvé le bon élève");
// 		console.log(item);
// 	}
// 	else{
// 		console.log("Ce n'est pas le bon");
// 	}
// })

// var 10 = dataList.findIndex(i => i.id === eleveId);

// var 11 = dataList.findIndex(funtion(i){ return i.id === eleveId});

// var 12 = dataList.map(function(item) { return item.id; }).indexOf(eleveId);

// console.log("11: " = 11);
// console.log("12: " = 12);
// console.log( 12);

