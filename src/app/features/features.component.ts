import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards = [
    {
      title: 'Get rid of installing Apps',
      description: "When you are at a table and ready to satiate with your food. With the given QR on the table, you don't need to download any app, you just scan it, and the menu is on your screen. Then proceed accordingly.",
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      icon: 'pe-7s-close-circle'
    },
    {
      title: 'Digital Menu',
      description: "Well, having a digital menu in hand is what is in trend. You can not only customize it but you can allure them with your special's, popular's, offer's and reflect your observations on the menu.",
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      icon: 'pe-7s-phone'
    },
    {
      title: 'Contactless Dining',
      description: "While approaching contactless dine-in experience in outer places, not only will help us in this pandemic situation but we also found a strategic and efficient way to serve our customers, food(safely).",
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      icon: 'pe-7s-delete-user'
    },
    {
      title: 'Increase in sales',
      description: "This change will not only attract customers to your doorsteps just for food, but they'll also come to enjoy your updated service, your features, your offers all these together increase your sales, yeah!",
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      icon: 'pe-7s-graph2'
    },
    {
      title: 'Fexible Payment Methods',
      description: "Contactless dining technology limits physical contact with the staff, surfaces, menus, and so on. This means that diners can view a menu, and order and pay for a meal directly from their smartphones.",
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      icon:'pe-7s-credit'
    },
    {
      title: 'ECUISINE',
      description: "ECuisine is one stop shop for everything. At ECuisine we belive to build product that fits you. We know one size doesn't fit all, therefore you can always raise a feature request and after analyzing we will build it for you (T&C applied)",
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      icon: 'pe-7s-like2'
    },

  ];

}
