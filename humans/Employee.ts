import {Human} from '../abstract/Human'
export class Employee extends Human {
    private _poste: string;
    private _code?: number;

    constructor(nom: string, prenom: string, poste: string, age?: number, code?: number) {
        super(nom, prenom, age);
        this._poste = poste;
        this._code = code;
    }

    get poste(): string {
        return this._poste;
    }

    set poste(value: string) {
        this._poste = value;
    }

    get code(): number {
        return this._code;
    }

    set code(value: number) {
        this._code = value;
    }
}