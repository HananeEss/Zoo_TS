import {Animal} from '../interface/Animal'
import {AnimalType} from "../Enum/AnimalType";
export class AnimalBase implements Animal {

    constructor(public _nom: string, public _type: AnimalType,) {
        this._nom = _nom;
        this._type = _type;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get type(): AnimalType {
        return this._type;
    }

    set type(value: AnimalType) {
        this._type = value;
    }
}