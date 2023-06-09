import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ScrollspyDirective } from './services/scrollspy.directive';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { TermAndConditionComponent } from './term-and-condition/term-and-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const appRoutes: Routes = [
  { path: 'cont', component: ContactComponent},
  { path: 'pp', component: PrivacyPolicyComponent},
  { path: 'tnc', component: TermAndConditionComponent },
  { path: '', component: LayoutComponent },
  { path: '**', component: LayoutComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ScrollspyDirective,
    FeaturesComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    TermAndConditionComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbAccordionModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
