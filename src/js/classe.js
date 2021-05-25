class Personne{
    constructor(nom,lieu,argent,mainDroite,mainGauche){
        this.nom=nom;
        this.lieu=lieu;
        this.argent=argent;
        this.mainDroite=mainGauche;
        this.mainGauche=mainGauche;
        this.seDeplacer=(lieu)=>{
            lieu.personnes.push(this);
            console.log(`${this.nom} est actuellement a la ${lieu.nom}`)
        }
        this.payerArticle=(article)=>{
            this.argent-=article.prix;
            console.log(`${this.nom} achete ${article.nom}`);
        }
        this.couper=(ingredient,outil)=>{
            ingredient.etat="coupe";
            outil.action="coupe";
        }
    }
}

class Lieu{
    constructor(nom,personnes){
        this.nom=nom;
        this.personnes=personnes;
    }
}
class Epicerie extends Lieu{
    constructor(nom,personnes,panier){
        super(nom,personnes);
        this.panier=panier;
    }
}

class Outil{
    constructor(nom,action){
        this.nom=nom;
        this.action=action;
    }
}
class Panier{
    constructor(type,contenu){
        this.type=type;
        this.contenu=contenu;
    }
}

class Produits{
    constructor(nom,etat,prix){
        this.nom=nom;
        this.etat=etat;
        this.prix=prix;
    }
}


class Poele extends Outil{
    constructor(nom,action,contenu){
        super(nom,action);
        this.contenu=contenu;
        this.cuire=(plat)=>{
            plat.etat="cuit";
            
            setTimeout(function(){ console.log(`Votre ${plat.nom} est cuite ! Bonne degustation !`); }, 4000);;
        }
    }
}

class Bol extends Outil{
    constructor(nom,action,contenu){
        super(nom,action);
        this.contenu=contenu;
        this.melanger=(nomMelange)=>{
            let newMelange= new Produits(nomMelange,"pascuit",10);
            console.log(`il melange le tout et obtient ${newMelange.nom}`);
            return newMelange;
        }
    }
}
export {Personne,Lieu,Epicerie,Outil,Panier,Produits,Poele,Bol,}