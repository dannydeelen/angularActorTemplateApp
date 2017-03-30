import { Injectable } from '@angular/core';
import {Person} from "../models/person";
import {Actor} from "../models/actor";
import {AngularFire} from "angularfire2";

@Injectable()
export class PersonService {
  person = {};
  PATH = "/Projects"
  constructor(private af: AngularFire) { }

  setPerson(currentPerson: any) {
    this.person = currentPerson;
  }

  getPerson() {
    return this.person;
  }
  savePerson(projectKey : String, actorKey: String, person : Person){
    this.af.database.object(this.PATH + "/" + projectKey + "/Actors/" + actorKey + "/persons/" + person.$key).update(person);
  }
  saveNewPerson(projectKey : String, actorKey: String, person : Person){
    this.af.database.list(this.PATH + "/" + projectKey + "/Actors/" + actorKey + "/persons/").push(person);
  }
}
