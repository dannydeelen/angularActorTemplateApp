import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {FirebaseIOService} from "../../services/firebase-io.service";
import {Actor} from "../../models/actor";
import {Router} from "@angular/router";
import {ProjectService} from "../../services/project.service";
import {ActorService} from "../../services/actor.service";
import {PersonService} from "../../services/person.service";
import {AngularFire} from 'angularfire2';
import {UserService} from "../../services/user-service.service";


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
  actors : any;
  project: any;
  user = {};
  constructor(private firebaseservice : FirebaseIOService,  private router: Router,
              private actorService : ActorService , private projectService: ProjectService,
              private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.project = this.projectService.getProject();
    this.firebaseservice.getActors(this.project.$key).subscribe(actor => this.actors = actor);
  }
  openActor(currentActor){
    this.actorService.setActor(currentActor);
    this.router.navigate(['/projects/'+ this.project.$key+ "/" + currentActor.actor + "/details"]);
  }
  newActor(){
    this.router.navigate(['/projects/'+ this.project.$key+ "/newActor" ]);
  }

}
