import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {Router} from "@angular/router";
import {ActorService} from "../../services/actor.service";
import {FirebaseIOService} from "../../services/firebase-io.service";
import {PersonService} from "../../services/person.service";

@Component({
  selector: 'app-actordetails',
  templateUrl: './actordetails.component.html',
  styleUrls: ['./actordetails.component.css']
})
export class ActordetailsComponent implements OnInit {
  actor: any;
  project : any;
  persons: any;

  constructor(private actorService : ActorService, private projectService : ProjectService,
              private firebaseservice : FirebaseIOService, private router : Router,
              private personService : PersonService,) { }

  ngOnInit() {
    this.project = this.projectService.getProject();
    this.actor = this.actorService.getActor();
    this.firebaseservice.getPersons(this.project.$key, this.actor.$key).subscribe(person => this.persons = person);
  }
  editActor(currentActor){
    this.actorService.setActor(currentActor);
    this.router.navigate(['/projects/'+ this.project.$key+ "/" + currentActor.actor]);
  }
  editPerson(currentPerson){
    this.personService.setPerson(currentPerson);
    this.router.navigate(['/projects/'+ this.project.$key+ "/" + this.actor.actor + "/"+ currentPerson.naam]);
  }
  openPerson(currentPerson){
    this.personService.setPerson(currentPerson);
    this.router.navigate(['/projects/'+ this.project.$key+ "/" + this.actor.actor + "/"+ currentPerson.naam]);
  }
  newPerson(){
    this.router.navigate(['/projects/'+ this.project.$key+ "/" + this.actor.actor + "/newPerson" ]);
  }

}
