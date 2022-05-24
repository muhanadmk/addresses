import { Address } from './app/address';

export class User {
  constructor() {
  }
  iduser: number;
  nom: string;
  prenom: string;
  sex: string;
  email: string;
  date_de_naissance: string;
  address: Address
}
