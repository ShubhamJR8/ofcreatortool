import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  activePanelId:string = "toggle-1";
  //DATA
  faqs = [
    {
      id: 1,
      q: "What is Ecuisine ?",
      a: "Ecuisine is software that requires you to believe it can change your dine-in service model in achieving contactless dine-in service. What people want when they come to your place and you are lacking in is perfection. They want safety, and we'll provide it at its best. They want quality service which consists of honor, no waiting, options in everything that people get outside like digital orders, payments, records which they can also keep, all at their fingertips, which people always want to be covered with a smartphone nowadays. So, use it and get it by letting us help!",
      formatting: "none",
    },
    {
      id: 2,
      q: "How does it work ?",
      a: "Well, it's as simple as you order your favorite pizza. You just select a subscription plan, fill in the pieces of information that we need to ask. As soon as we verify you as a valid user, we send the fully ready account with which you can manage your place. You will have a profile, a bunch of QRs, and a dashboard from where you can customize your menu stuff as many times which will get reflected same to your customer. An order handling page will be available where you can handle the requests like accepting the order, cancelations of order, controlling the status of the order.",
      formatting: "none",
    },
    {
      id: 3,
      q: "What are the benefits ?",
      aP: [
        "Well, safety comes first so a contactless food ordering service system is our priority feature.",
        "Now, customer don't have to wait in queue to order.",
        "Multiple orders can be initiated at once and can be handled very carefully.",
        "Foodies can search their favorite items very easily in digital menus, put along all orders in a cart, do the payment and done, order on the table.",
        "No more wasting money on printing menus, more employees, additional managing software, foods which your customers not liking.",
        "Customers are so psychologically tied to coupons and offers and discounts, which will become very easy to provide using a digital menu.",
      ],
      formatting: "points",
    },
    {
      id: 4,
      q: "How much time does it take to set up ?",
      a: "It just takes 3 to 4 working days from getting registered on our website to getting all things out of the box.",
      formatting: "none",
    },
    {
      id: 5,
      q: "What role does it play in the current pandemic ?",
      a: "COVID-19 is impacting every industry and nearly all facets of everyday life, and many states and cities are implementing new social distancing guidelines for operations, including the restriction of dining-in at restaurants, and a shift to pick up and delivery models. Going contactless at quick-service restaurants (QSRs) in the past decade typically referred to adopting mobile payment options. While COVID-19 has increased demand for delivery and pick-up, restaurants were already looking to optimize the order-to-fulfillment process. Now, the crisis has forced restaurants to expand their view of “contactless” and how it relates to every aspect of the customer experience.",
      formatting: "none",
    },
  ]

  constructor(
    private scrollService: ScrollToService,
  ) { }

  ngOnInit(): void {
  }

  startScroll(payload:any) {
    let element:any = document.getElementById(payload);
    element?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

  panelChange(payload:any) {
    this.activePanelId = payload.panelId;
  }
}
