import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectplanService {

  defaultPlan:string = "";
  subjectSelectedPlan:BehaviorSubject<string>;

  constructor() {
    this.subjectSelectedPlan = new BehaviorSubject<string>(this.defaultPlan);
    this.subjectSelectedPlan.next(this.defaultPlan);
  }

  updatePlan(plan:string) {
    this.subjectSelectedPlan.next(plan);
  }
}
