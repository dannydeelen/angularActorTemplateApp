import {Component, OnInit} from '@angular/core';
import {ActorService} from "../../services/actor.service";
import {FirebaseIOService} from "../../services/firebase-io.service";
import {ProjectService} from "../../services/project.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user-service.service";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actor: any;
  project: any;
  user: any;

  constructor(private actorService: ActorService, private projectService: ProjectService,
              private firebaseservice: FirebaseIOService, private router: Router,
              private userService: UserService) {
    this.initActorRegistration()
  }

  ngOnInit() {
    this.actor = {};
    this.user = this.userService.getUser();
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
