import {Animal} from './interface/Animal'
import {Human} from "./abstract/Human";
import {Employee} from "./humans/Employee";
import {Client} from "./humans/Client";

export class Zoo {
    private _location: String;
    private _name: String;
    private animaux: Animal[] = [];
    private employees: Human | Employee[] = [];
    private clients: Human | Client[] = [];

    constructor(location: String, name: String) {
        this._location = location;
        this._name = name;
    }

    ajouterAnimal(animal: Animal): void {
        this.animaux.push(animal)
    }

    ajouterEmployee(employee: Human): void {
        if (!(this.employees instanceof Human)) {
            if (employee instanceof Employee) {
                this.employees.push(employee)
            }
        }
    }

    ajouterClient(client: Human): void {
        if (!(this.clients instanceof Human)) {
            if (client instanceof Client) {
                this.clients.push(client)
            }
        }
    }

    afficherAnimaux(): void {
        console.log("Animaux du zoo :");
        this.animaux.forEach(animal => {
            console.log(`${animal.nom} : ${animal.type}`);
        });
    }

    afficherEmployees(): void {
        console.log("Employés du zoo :");
        if (!(this.employees instanceof Human)) {
            this.employees.forEach(employee => {
                console.log(`${employee.nom} ${employee.prenom} - Age : ${employee.age} - Poste : ${employee.poste}`);
            });
        }
    }

    afficherClients(): void {
        console.log("Clients du zoo :");
        if (!(this.clients instanceof Human)) {
            this.clients.forEach(client => {
                console.log(`${client.nom} ${client.prenom} - Age : ${client.age} - Date d'entrée : ${client.date_entree}`);
            });
        }
    }

    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }


    get location(): String {
        return this._location;
    }

    set location(value: String) {
        this._location = value;
    }
}