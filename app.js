function Personne(nom, prenom, age, sexe){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.sexe = sexe;

    this.getPersonne = function (){
        return "Ma personne s'appelle " + this.nom + " " + this.prenom + ", elle a " + this.age + " ans, et est de sexe " + this.sexe;
    }
}

let tableau = [];

let sam = new Personne("Coquelet", "Samuel", 31, "Masculin");
let tsunade = new Personne("Senju", "Tsunade", 51, "féminin");
let hallibel = new Personne("Tia","Hallibel", 32,"féminin");
let nel = new Personne ("Arancar", "Nelliel", 33, "féminin");
let yoruichi = new Personne("Chiwoin", "Yoruichi", 274, "féminin");

tableau.push(sam,tsunade,hallibel,nel,yoruichi);


for (let i = 0; i < tableau.length; i++){
    let div1 = document.createElement("div");
    div1.innerHTML = tableau[i].getPersonne();
    document.body.appendChild(div1);
}