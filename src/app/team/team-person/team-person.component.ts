import { Component, OnInit, Input,  Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Team} from '../model/team';
import {TeamChange} from '../model/team-change';

@Component({
  selector: 'app-team-person',
  templateUrl: './team-person.component.html',
  styleUrls: ['./team-person.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamPersonComponent {

  @Input() public team: Team;
  @Output() private quantityChange: EventEmitter<TeamChange> = new EventEmitter();

  constructor() { }

  incrementInCart() {
    this.quantityChange.emit({team: this.team, changeInQuantity: 1});
  }

  decrementInCart() {
    if (this.team.quantityInCart > 0) {
      this.quantityChange.emit({product: this.team, changeInQuantity: -1});
    }
  }

}