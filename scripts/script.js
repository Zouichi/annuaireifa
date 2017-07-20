var data = MyJson;

var monUl = document.createElement("ul");
monUl.classList.add("list-group")
var monWrap = document.getElementById("wrap");

function addBtnProfile(elem) {
    var btnProfile = document.createElement("span");
    btnProfile.classList.add("badge")
    btnProfile.innerHTML = "<span class='glyphicon glyphicon-user' aria-hidden='true'></span>";
    btnProfile.addEventListener("click", detectClick);
    elem.appendChild(btnProfile);
}

function addBtnDelete(elem) {
    var deleteBtn = document.createElement("span");
    deleteBtn.classList.add("badge")
    deleteBtn.innerHTML = "<span class='glyphicon glyphicon-trash' aria-hidden='true'></span>";
    deleteBtn.addEventListener("click", deleteEleve);
    elem.appendChild(deleteBtn);
}

function addBtnEdit(elem) {
    var deleteEdit = document.createElement("span");
    deleteEdit.classList.add("badge")
    deleteEdit.innerHTML = "<span class='glyphicon glyphicon-pencil' aria-hidden='true'></span>";
    deleteEdit.addEventListener("click", editEleve);
    elem.appendChild(deleteEdit);
}

function bindList(eleve) {
    var monLi = document.createElement("li");
    monLi.innerHTML = eleve.nom + ' ' + eleve.prenom;
    monLi.classList.add("list-group-item");
    monLi.setAttribute("data-idEleve", eleve.id);

    addBtnProfile(monLi);
    addBtnDelete(monLi);
    addBtnEdit(monLi);
    
    monUl.appendChild(monLi);
}

function removeElem(elem){
    elem.remove();

}

data.forEach(function(eleve) {
    bindList(eleve);
});

monWrap.appendChild(monUl);

function detectClick(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    var myTarget = event.target.parentNode.parentNode;
    console.log(myTarget);
    var eleveId = myTarget.getAttribute("data-idEleve");
    console.log(eleveId);

    window.location = "./profil.html" + '#' + myTarget.getAttribute("data-idEleve");
}

var monBtn = document.getElementById("addNew");
monBtn.addEventListener("click", function(event) {
    document.getElementById("myForm").classList.toggle("show");

});


function submitForm(event) {
    console.log("submitted");
    var myForm = document.getElementById("newEleve").elements;
    var newEleve = {
        id: data.length + 1
    };
    console.log(typeof myForm);
    _.forIn(myForm, function(item) {
        console.log(item);
        newEleve[item.name] = item.value;

    });
    console.log(newEleve);
    data.push(newEleve);
    bindList(newEleve);
    console.log(data);

};

function deleteEleve(event) {
    event.preventDefault();
    console.log("delete");
    console.log(event);
    console.log(event.target);
    var myTarget = event.target.parentNode.parentNode;
    console.log(myTarget);
    var eleveId = myTarget.getAttribute("data-ideleve");
    console.log(eleveId)
    var myIndex = data.findIndex(function(i) {
        return i.id === eleveId
    });
    data.splice(myIndex, 1);
    removeElem(myTarget);
};

function editEleve(event){
    console.log("edit");
    document.getElementById("myForm").classList.toggle("show");
    var myTarget = event.target.parentNode.parentNode;
    console.log(myTarget);
    var eleveId = myTarget.getAttribute("data-idEleve");
    console.log(eleveId);
    var myIndex = data.findIndex(function(i) {
        return i.id === parseFloat(eleveId);
    }); 
    console.log(myIndex);
    var myForm = document.getElementById("newEleve").elements;
    _.forIn(myForm, function(item) {
        item.value = data[myIndex][item.name];
    });
};