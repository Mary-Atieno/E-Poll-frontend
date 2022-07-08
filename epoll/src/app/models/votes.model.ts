import {Position} from './position.model';
import {Candidate} from './candidate.model';
import {Voter} from './voter.model';
export interface Votes {
    voter:Voter;
    position:Position;
    candidate:Candidate;
}
