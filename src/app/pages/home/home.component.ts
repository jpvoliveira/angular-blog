import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';
import { Card } from 'src/app/interfaces/Card';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards: Array<Card> = [];

  constructor() { }

  ngOnInit(): void {
    this.cards = this.setCardsContent();
  }

  setCardsContent() {
    const result = dataFake;
    return result;
  }
}
