import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  constructor() { }

  project = {}

  setProject(currentProject: any) {
    this.project = currentProject;
  }

  getProject() {
    return this.project;
  }
}
