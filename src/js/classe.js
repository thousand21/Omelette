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

        }
        this.couper=(ingredient,outil)=>{

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
        this.cuire=()=>{

        }
    }
}

class Bol extends Outil{
    constructor(nom,action,contenu){
        super(nom,action);
        this.contenu=contenu;
        this.melanger=(nomMelange)=>{

        }
    }
}
export {Personne,Lieu,Epicerie,Outil,Produits,Poele,Bol,}