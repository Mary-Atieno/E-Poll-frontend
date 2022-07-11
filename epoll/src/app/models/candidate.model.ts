import {Position} from './position.model';
export interface Candidate {
  
    id?:any;
    fullname:string;
    image:string;
    bio:string;
    position?:Position;
}
