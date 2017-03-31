import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'persoonpipe'})
export class PersoonpipePipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let persons = [];
    for (let key in value) {
      persons.push({key: key, value: value[key], imageString: value[key].imageString});
    }
    return persons;
  }
}
