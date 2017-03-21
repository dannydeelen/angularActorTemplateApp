import { Injectable } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";
import {Project} from "../models/project";
import {Actor} from "../models/actor";

@Injectable()
export class FirebaseIOService {


  PATH = "/Projects"

  constructor(private af: AngularFire) { }

  getProjects() : Observable<Project []>{
    return this.af.database.list(this.PATH)
  }
  getActors(key: string) : Observable<Actor []>{
    return this.af.database.list(this.PATH + "/" + key)
  }

  getRegistration(key : string) : Observable<Project>{
    return this.af.database.object(this.PATH +"/" + key)
  }

  saveRegistration(project : Project){
    this.af.database.list(this.PATH).push(project)
  }

  removeRegistration(project: Project){
    this.af.database.list(this.PATH).remove(project.$key);
  }

}
