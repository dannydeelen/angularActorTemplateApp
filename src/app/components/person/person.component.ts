import {Component, OnInit} from '@angular/core';
import {PersonService} from "../../services/person.service";
import {ProjectService} from "../../services/project.service";
import {ActorService} from "../../services/actor.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user-service.service";

@Component({
  selector: 'app-addperson',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class AddpersonComponent implements OnInit {

  person: any;
  project: any;
  actor: any;
  user: any;
  backupString;

  constructor(private personService: PersonService, private projectService: ProjectService
    , private actorService: ActorService, private router: Router, private userService: UserService) {
    this.initPersonRegistration();
  }

  ngOnInit() {
    this.person = {};
    this.user = this.userService.getUser();
    this.person = this.personService.getPerson();
    this.project = this.projectService.getProject();
    this.actor = this.actorService.getActor();
  }

  savePerson(form) {
    if (this.person.hasOwnProperty("$key")) {
      this.personService.savePerson(this.project.$key, this.actor.$key, this.person);
    }
    else {
      this.personService.saveNewPerson(this.project.$key, this.actor.$key, this.person);
    }
    form.reset();
    this.router.navigate(['/projects/' + this.project.$key + "/" + this.actor.actor + "/details"]);
    this.personService.person = {};
  }

  initPersonRegistration() {
    this.person = {naam: "", functie: "", email: "", telefoon: "", telefoontype: "", opmkeringen: ""}
  }

  setImage($event) {
    let temp = $event.src.substr(11, 3)
    if ($event.src.substr(11,3) == "png") {
      this.backupString = this.person.imageString
      this.person.imageString = $event.src.substr(22, $event.src.length)
    }
  }

  imageRemoved() {
    this.person.imageString = this.backupString
  }
}
