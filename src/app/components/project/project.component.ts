import { Component, OnInit } from '@angular/core';
import {FirebaseIOService} from "../../services/firebase-io.service";
import {Actor} from "../../models/actor";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  actors : Array<Actor> = []

  constructor(private firebaseservice : FirebaseIOService) { }

  ngOnInit() {
    this.firebaseservice.getActors("key").subscribe(actor => this.actors = actor)
  }

}
