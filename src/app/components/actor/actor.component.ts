import { Component, OnInit } from '@angular/core';
import {ActorService} from "../../services/actor.service";
import {FirebaseIOService} from "../../services/firebase-io.service";
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actor: any;
  project : any;
  persons: any;
  constructor(private actorService : ActorService, private projectService : ProjectService,
              private firebaseservice : FirebaseIOService) { }

  ngOnInit() {
    this.project = this.projectService.getProject();
    this.actor = this.actorService.getActor();
    this.firebaseservice.getPersons(this.project.$key, this.actor.$key).subscribe(person => this.persons = person);
  }

}
