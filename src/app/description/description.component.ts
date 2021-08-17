import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [
    {
      title: 'No App required',
      description: "When you are at a table and ready to satiate your your food. With the OR hunger, you don't need to download any app to order code on the table, you can open the menu on your smartphone's browser.",
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Digital Menu',
      description: "Display all items in best way and it allows your guest to place the order easily.",
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Contactless Dining',
      description: 'No need to be in Contact with Waiter anymore. Follow Social Distancing as we have to in this pandemic. #StaySafe.',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Increase in sales',
      description: 'Let your guests place orders and re-orders without contacting the restaurant waiter or staff, too easy to operate hassel free Food Ordering System.',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'ECUISINE', 
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },

  ];
}