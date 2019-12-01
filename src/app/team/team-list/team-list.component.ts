import { Component, OnInit } from '@angular/core';
import {Team} from '../model/team';

@Component({
  selector: 'app-team-list',
   template: `
    <app-team-person [team]="team"
                      (quantityChange)="onQuantityChange($event)"
                      *ngFor="let product of products"></app-team-person>
  `,
  styles: []
})
export class TeamListComponent implements OnInit {

  public team: Array<Team>;

  constructor() { }

  ngOnInit() {
     this.team = [
      {
        imageUrl: 'https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-11/petersen_kai.jpg.jpeg?itok=JVf1P7aR',
        name: 'Kai Petersen',
        position: 'Professor',
        room: 206,
        phone: 8051470,
        email: 'kai.petersen@hs-flensburg.de'
      },
      {
        imageUrl: 'https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-10/cords_soenke.jpg.jpeg?itok=REq2aLNc',
        name: 'Sönke Cordts',
        position: 'Professor',
        room: 224,
        phone: 8051496,
        email: 'soenke.cordts@hs-flensburg.de'
      },
      {
        imageUrl: 'https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-11/petersen_kai.jpg.jpeg?itok=JVf1P7aR',
        name: 'Kai Petersen',
        position: 'Professor',
        room: 206,
        phone: 8051470,
        email: 'kai.petersen@hs-flensburg.de'
      }
    ];
  }

  onQuantityChange(change: TeamChange) {
    const product = this.team.find(prod => {
      return change.product.id === prod.id;
    });
    product.quantityInCart += change.changeInQuantity;
  }

}