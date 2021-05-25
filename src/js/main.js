// import des classes
import * as classe from './classe.js';

//on cree les objets
let personnage=new classe.Personne("van","",30,[],[]);
let maison= new classe.Lieu("maison",[]);
let oeuf=new classe.Produits("oeuf","entier",5);
let oignon=new classe.Produits("oignon","entier",2);
let epice=new classe.Produits("epice","moulu",3);
let gruyere=new classe.Produits("gruyere","entier",4);
let ciboulette=new classe.Produits("ciboulette","entier",6);
let panier1=new classe.Panier("panier1",[]);
let panier2=new classe.Panier("panier2",[]);
let panier3=new classe.Panier("panier3",[]);;
let panier=[panier1,panier2,panier3];
let epicerie= new classe.Epicerie("Epicerie",[],panier);
let contenuEpicerie=[oeuf,oignon,epice,gruyere,ciboulette];
let bol= new classe.Bol("nom","",[]);
let couteau= new classe.Outil("couteau", "");
let omelette="omelette";
let poele= new classe.Poele("poele","",[]);

//debut de lomelette//debut de lomelette

// il se trouve a la maison
personnage.seDeplacer(maison);

//il se rend a lepicerie
maison.personnes.pop();
personnage.seDeplacer(epicerie);

//il prend le panier1 de lepicerie et le met dans sa main droite;
personnage.mainDroite.push(panier[0]);
panier.shift();
console.log(personnage.mainDroite);
console.log(panier);
console.log(`${personnage.nom} a pris un ${personnage.mainDroite[0].type}`);

//le personnage prend les objets de lepicerie et le main dans son panier
contenuEpicerie.forEach(element=>personnage.mainDroite[0].contenu.push(element));
contenuEpicerie.forEach(element=>console.log(`${personnage.nom} met ${element.nom} dans son panier`));
console.log(personnage.mainDroite[0]);

//le personnage paye les articles 1a1
contenuEpicerie.forEach(element=>personnage.payerArticle(element));
// il lui reste autant dargent au personnage
console.log(`Il reste ${personnage.argent} euros a ${personnage.nom}`);

//il rentre a la maison
epicerie.personnes.pop();
personnage.seDeplacer(maison);

//mettre tous les ingredient du panier dans le bol
console.log(bol.contenu);
personnage.mainDroite[0].contenu.forEach(element=>bol.contenu.push(element));
personnage.mainDroite[0].contenu.forEach(element=>console.log(`${personnage.nom} ajoute ${element.nom} dans le bol`));
console.log(bol.contenu);
//vider le panier
personnage.mainDroite[0].contenu.forEach(element=>personnage.mainDroite[0].contenu.splice(element));
console.log(personnage.mainDroite[0]);

//on revient a lepicerie
maison.personnes.pop();
personnage.seDeplacer(epicerie);

//on depose le panier a lepicerie
epicerie.panier.push(personnage.mainDroite[0]);
console.log(`${personnage.nom} depose le panier a lepicerie`)
console.log(epicerie.panier); 
//donc il na plus de panier sur lui
personnage.mainDroite.pop();
console.log(personnage.mainDroite);

//il revient chez lui
epicerie.personnes.pop();
personnage.seDeplacer(maison);

//verifier si les ingredient dans le bol sont entier et les coupe
for(let i=0;i<bol.contenu.length;i++){
    if(bol.contenu[i].etat=="entier"){
        personnage.couper(bol.contenu[i],couteau);
        console.log(`${personnage.nom} coupe ${bol.contenu[i].nom}`);
    }
}

//melanger le contenu du bol et obtient une omelette
let omelettesMiam=bol.melanger(omelette);

//il vide le bol
bol.contenu.splice(0,bol.contenu.length);
console.log("le bol est vide");
console.log(bol.contenu);

//cuire lomelette sur la poele
poele.contenu.push(omelettesMiam);
console.log(poele.contenu);
poele.cuire(omelettesMiam);
console.log(omelettesMiam.etat);

 







