import { Component, OnInit } from '@angular/core';
import {PersonService} from "../../services/person.service";
import {ProjectService} from "../../services/project.service";
import {ActorService} from "../../services/actor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addperson',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class AddpersonComponent implements OnInit {

  person: any;
  project: any;
  actor: any;
  constructor(private personService : PersonService, private projectService : ProjectService
  , private actorService : ActorService, private router : Router) {
    this.initPersonRegistration();
  }

  ngOnInit() {
    this.person = {};
    this.person = this.personService.getPerson();
    this.project = this.projectService.getProject();
    this.actor = this.actorService.getActor();
  }
  savePerson(form){
    if(this.person.hasOwnProperty("$key")) {
      this.personService.savePerson(this.project.$key, this.actor.$key, this.person);
    }
    else{
      this.personService.saveNewPerson(this.project.$key, this.actor.$key, this.person);
    }
    form.reset();
    this.router.navigate(['/projects/'+ this.project.$key + "/" + this.actor.actor + "/details"]);
    this.personService.person = {};
  }
  initPersonRegistration(){
    this.person = {naam: "", functie: "", email: "", telefoon: "",telefoontype: "", opmkeringen: ""}
  }

}
