import Possession from "./Possession";

export  class TrainDeVie extends Possession{
    constructor(possesseur, type, date, value, libelle, Type_train_de_vie){
        super(possesseur, type, date, value, libelle);
        this.Type_train_de_vie = Type_train_de_vie;
    }
}