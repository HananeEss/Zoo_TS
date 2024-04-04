import {Human} from '../abstract/Human'
export class Client extends Human {
    private _date_entree: string;

    constructor(nom: string, prenom: string, date_entree: string, age?: number) {
        super(nom, prenom, age);
        this._date_entree = date_entree;
    }

    get date_entree(): string {
        return this._date_entree;
    }

    set date_entree(value: string) {
        this._date_entree = value;
    }
}