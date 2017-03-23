import { Injectable } from '@angular/core';

@Injectable()
export class ActorService {

  constructor() { }
  actor = {};

  setActor(currentActor: any) {
    this.actor = currentActor;
  }

  getActor() {
    return this.actor;
  }
}
