import {Person} from "./person";
/**
 * Created by Arjan van Maren on 19/03/2017.
 */
export interface Actor{
  $key? : string,
  actor: string,
  content: string,
  beschrijving: string,
  archived: boolean,
  persons? : Array<Person>
}
