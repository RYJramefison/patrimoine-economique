export class Possession {
  constructor(possesseur, type, date, value, libelle) {
    this.possesseur = possesseur;
    this.date = new Date(date);
    this.value = value;
    this.type = type;
    this.libelle = libelle;
  }


getValeur(date) {
  const result = this.value;
  }
}
