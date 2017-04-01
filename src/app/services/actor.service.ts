import { Injectable } from '@angular/core';
import {Actor} from "../models/actor";
import {AngularFire} from "angularfire2";

@Injectable()
export class ActorService {

  constructor(private af: AngularFire) { }
  actor = {};
  PATH = "/Projects"

  setActor(currentActor: any) {
    this.actor = currentActor;
  }

  getActor() {
    return this.actor;
  }
  saveActor(projectKey : String, actor : Actor){
    this.af.database.object(this.PATH + "/" + projectKey + "/Actors/" + actor.$key).update(actor);
  }
  saveNewActor(projectKey : String, actor : Actor){
    this.af.database.list(this.PATH + "/" + projectKey + "/Actors/").push(actor);
  }
  archiveActor(projectKey : String, actor : Actor){
    this.af.database.object(this.PATH + "/" + projectKey + "/Actors/" + actor.$key).update(actor);
  }
}
