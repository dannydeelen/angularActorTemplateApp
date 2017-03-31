import {Component, OnInit} from '@angular/core';
import {ActorService} from "../../services/actor.service";
import {FirebaseIOService} from "../../services/firebase-io.service";
import {ProjectService} from "../../services/project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actor: any;
  project: any;

  constructor(private actorService: ActorService, private projectService: ProjectService,
              private firebaseservice: FirebaseIOService, private router: Router) {
    this.initActorRegistration()
  }

  ngOnInit() {
    this.actor = {};
    this.project = this.projectService.getProject();
    this.actor = this.actorService.getActor();
  }


  saveActor(form) {
    if (this.actor.hasOwnProperty("$key")) {
      this.actorService.saveActor(this.project.$key, this.actor);
    }
    else {
      this.actorService.saveNewActor(this.project.$key, this.actor);
    }
    form.reset();
    this.router.navigate(['/projects/' + this.project.$key]);
    this.actorService.actor = {};
  }

  initActorRegistration() {
    this.actor = {actor: "", beschrijving: "", archived: false}
  }
}
