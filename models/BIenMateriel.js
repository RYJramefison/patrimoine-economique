import Possession from "./Possession"

export default class BienMateriel extends Possession{
    constructor(possesseur,possesseur, type, date, value, libelle, Type_materiel){
        super(possesseur,possesseur, type, date, value, libelle);
        this.Type_materiel = Type_materiel;
    }
}