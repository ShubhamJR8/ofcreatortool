import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepsComponent } from './steps/steps.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqsComponent } from './faqs/faqs.component';
import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from './footer/footer.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MediaComponent } from './media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsComponent,
    ToolbarComponent,
    PricingComponent,
    FaqsComponent,
    DescriptionComponent,
    FooterComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MDBBootstrapModule.forRoot(),
    MatSidenavModule,
    FlexLayoutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
