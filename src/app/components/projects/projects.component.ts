import {Component, OnInit} from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Router} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {UserService} from "../../services/user-service.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  user = {}

  constructor(public af: AngularFire, private router: Router, private userservice: UserService) {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.user = user
        this.router.navigate(['/projects'])
      }
      else {
        // user not logged in
        this.router.navigate(['/login'])
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/login'])
  }

}
