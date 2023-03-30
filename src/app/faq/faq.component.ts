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
      q: "Are there any limits on how many people I can follow ?",
      a: "Onlyfans only allows you to follow a limited number of people per day(approximately 100 per day). We stay within those limits so your account stays safe!",
      formatting: "none",
    },
    {
      id: 2,
      q: "Will this tool find all of my expired fans ?",
      a: "This tool can detect all your expired fans, but it won't automatically follow all of them back due to various reasons. For instance, some accounts may have disabled their following option, while others could be inactive. Attempting to follow such accounts would be a waste of time. Instead, this tool exclusively follows accounts that are free to subscribe to, ensuring that you don't get charged anything on your OnlyFans account.",
      formatting: "none",
    },
    {
      id: 3,
      q: "Can my assistant / sexters / chatters use the extension ?",
      a: "You do not need to purchase additional licenses for your sexters or chatters. They can simply install the extension on their Chrome browser, and it will function on the OnlyFans account when they log in.",
      // aP: [
      //   "Well, safety comes first so a contactless food ordering service system is our priority feature.",
      //   "Now, customer don't have to wait in queue to order.",
      // ],
      // formatting: "points",
      formatting: "none",
    },
    {
      id: 4,
      q: "Does it take any money from my OnlyFans account ?",
      a: "No, we only follow accounts that are free to subscribe to, so you wont get charged anything.",
      formatting: "none",
    },
    {
      id: 5,
      q: "How long does it take? ?",
      a: "It takes 5-10 minutes for the tool to follow expired fan accounts, for the day. We deliberately slow down the tool, and act as humanly as possible, so that you can be safe. We are the safest onlyfans automation tool on the market.",
      formatting: "none",
    },
    {
      id: 6,
      q: "Is there customer support ?",
      a: "Yes there is! You can email us at support@ofcreatortools.com whenever you have any questions. Dont hesitate to get in touch :)",
      formatting: "none",
    },
    {
      id: 7,
      q: "Does it work for multiple accounts ?",
      a: "You need to buy multiple subscriptions if you have multiple accounts, with each subscription tied to a specific account. If you require more than 5 license keys, we will provide you with a discount, just get in touch with us at support@ofcreatortools.com.",
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
