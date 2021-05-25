// import des classes
import * as classe from './classe.js';

//on cree les objets
let personnage=new classe.Personne("van","",30,[],[]);
let maison= new classe.Lieu("maison",[]);
let oeuf=new classe.Produits("oeuf","entier",5);
let oignon=new classe.Produits("oignon","entier",2);
let epice=new classe.Produits("epice","moulu",3);
let gruyere=new classe.Produits("gruyere","entier",4);
let ciboulette=new classe.Produits("ciboulette","entier",4);
let panier1=[oeuf,gruyere,oignon,epice,gruyere];
let panier2=[oignon];
let panier3=[epice];
let panier=[panier1,panier2,panier3];
let epicerie= new classe.Epicerie("Epicerie",[],panier);


//debut de lomelette//debut de lomelette

// il se trouve a la maison
personnage.seDeplacer(maison);

//il se rend a lepicerie
personnage.seDeplacer(epicerie);
