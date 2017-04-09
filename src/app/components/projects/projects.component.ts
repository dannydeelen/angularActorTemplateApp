import {Component, OnInit} from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Router} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {UserService} from "../../services/user-service.service";
import {FirebaseIOService} from "../../services/firebase-io.service";
import {Project} from "../../models/project";
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  user = {}
  projects : Array<Project> = [];
  project : any;

  constructor(public af: AngularFire, private router: Router, private userservice: UserService,
              private firebaseservice : FirebaseIOService, private projectSerivce: ProjectService) {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.user = user
        this.userservice.setUser(user);
        this.router.navigate(['/projects'])
      }
      else {
        // user not logged in
        this.router.navigate(['/login'])
      }
    });
  }

  ngOnInit() {
    this.firebaseservice.getProjects().subscribe(proj => this.projects = proj)
  }


  openProject(currentProject){
    this.projectSerivce.setProject(currentProject);
    this.router.navigate(['/projects/'+ currentProject.$key]);
  }

}
