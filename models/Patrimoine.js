export class Patrimoine {
  
  constructor(possesseur, date, possessions = []) {
    this.possesseur  = possesseur;
    this.date = date;
    this.possessions = possessions; // [Possession, Possession, ...]
  }

  getValeur(date) {
    let result = 0;
    this.possessions.forEach(possession => {
      result += this.possession;
    })

    return result;
  }

  addPossession(possession) {
    this.possessions.push(possession);
  }

  removePossession(possession) {
    this.possessions = this.possessions.filter(p => p.libelle !== possession.libelle);
  }

}

