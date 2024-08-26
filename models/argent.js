
class Compte {
    constructor(Personne, solde, date) {
        this.Personne = Personne;
        this.solde = solde;
        this.date = new Date(date);
    }

    getSolde() {
        return this.solde;
    }
}

    class CompteCourant extends Compte {
    constructor(Personne, solde, date) {
        super(Personne, solde, date);
    }
}

    class CompteEpargne extends Compte {
    constructor(Personne, solde, date, tauxInteret) {
        super(Personne, solde, date);
        this.tauxInteret = tauxInteret;
    }

    calculerInteret() {
        return this.solde * this.tauxInteret / 100;
    }
}
