import { Component, OnInit } from '@angular/core';
import { SelectplanService } from '../services/selectplan.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  constructor(private planService: SelectplanService) {}

  ngOnInit(): void {}

  plans = [
    {
      title: 'Starter',
      cost: '1999',
      duration: 'Monthly',
      features: {
        unlimitedQR: true,
        unlimitedOrder: true,
        endlessAddItem: true,
        techSupport: false,
        unlimitedFreeUpdates: false,
        backups: false,
      },
      badge: false,
    },
    {
      title: 'Basic',
      cost: '3999',
      duration: '3 Month',
      features: {
        unlimitedQR: true,
        unlimitedOrder: true,
        endlessAddItem: true,
        techSupport: true,
        unlimitedFreeUpdates: false,
        backups: false,
      },
      badge: true,
      badgeDescription: 'Best Value',
    },
    {
      title: 'Professional',
      cost: '5999',
      duration: '6 Month',
      features: {
        unlimitedQR: true,
        unlimitedOrder: true,
        endlessAddItem: true,
        techSupport: true,
        unlimitedFreeUpdates: true,
        backups: false,
      },
      badge: false,
    },
    {
      title: 'Ultra',
      cost: '9999',
      duration: 'Year',
      features: {
        unlimitedQR: true,
        unlimitedOrder: true,
        endlessAddItem: true,
        techSupport: true,
        unlimitedFreeUpdates: true,
        backups: true,
      },
      badge: false,
    },
  ];

  passPlanName(planName:string) {
    this.planService.updatePlan(planName);
  }
}
