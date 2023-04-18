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
      q: "What is ofcreatortools?",
      a: "Ofcreatortools is a one of a kind extension that helps you manage your onlyfans like the top creators. We have a ton of features to help you make more money, and save hours of your time everyday!",
      formatting: "none",
    },
    {
      id: 2,
      q: "Is it safe to use?",
      a: "Our extension is COMPLETELY safe to use, we take this topic very seriously. No creator has been penalised for using our extension as it is impossible to detect, since we act like a real user( like clicking a profile). We don't have any access to your content, not do we need your password or financial details to make our extension work Compared to other tools, we are the safest tool on the market.",
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
      q: "Is it free or paid?",
      a: "It is a paid chrome extension with some free features.",
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
      a: "You need to buy multiple subscriptions if you have multiple accounts, with each subscription tied to a specific account.",
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
