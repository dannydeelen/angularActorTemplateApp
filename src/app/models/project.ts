import {Actor} from "./actor";
/**
 * Created by Arjan van Maren on 19/03/2017.
 */
export interface Project{
  $key? : string
  analistID: string,
  content: string,
  title: string,
  actorlist : Array<Actor>
}
