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
      title: 'Autofollow Expired followers to send PPV',
      description: "Auto Follow your expired fans with 1 click, allowing you send PPV to them. Most top 1 percent of creators send PPV to their expired fans, allowing you to earn 20-30 percent more monthly income. Usually, 5-10 percent of expired fans will also resubscribe, just because you started following them.",
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      icon: 'pe-7s-like2'
    },
    {
      title: 'Fan Info and Fan spend tab',
      description: "See which fans spent the most in the chat overview, along with a breakdown on how they spent. This allows you to focus on the high spenders, and avoid freeloaders.",
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      icon: 'pe-7s-like2'
    },
    {
      title: 'Vault Labelling',
      description: "Easily view which media has already been sent to your fan, to avoid sending repeats.",
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      icon: 'pe-7s-like2'
    },
    // {
    //   title: 'ECUISINE',
    //   description: "ECuisine is one stop shop for everything. At ECuisine we belive to build product that fits you. We know one size doesn't fit all, therefore you can always raise a feature request and after analyzing we will build it for you (T&C applied)",
    //   img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    //   icon: 'pe-7s-like2'
    // },

  ];

}
