import {Zoo} from "./Zoo";
import {AnimalBase} from "./animal/AnimalBase";
import {Employee} from "./humans/Employee"
import {AnimalType} from "./Enum/AnimalType";
import {Client} from "./humans/Client";

let zoo = new Zoo('Paris', 'Zooland');

//Animaux
let girafe = new AnimalBase('girafe', AnimalType.Herbivore);
let lion = new AnimalBase('Lion', AnimalType.Carnivore);
let Ours = new AnimalBase('Ours', AnimalType.Omnivore);
zoo.ajouterAnimal(girafe);
zoo.ajouterAnimal(lion);
zoo.ajouterAnimal(Ours);
zoo.afficherAnimaux();

//Employés
let employee1 = new Employee('James', 'J', 'Responsable', 30 )
let employee2 = new Employee('Sophie', 'S', 'Vétérinaire', 25 )
zoo.ajouterEmployee(employee1);
zoo.ajouterEmployee(employee2);
zoo.afficherEmployees();

//Clients
let client1 = new Client('Jean', 'J', '15/04/2025', 20)
zoo.ajouterClient(client1);
zoo.afficherClients();


