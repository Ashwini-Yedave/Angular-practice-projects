import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonComponent } from './Jsoncrud/jsoncrud.component';
import { UserRegistrationComponent } from './Registration Form/user-registration.component';
import { CheckActivityComponent } from './CheckActivitiy/check-activity.component';
import { CalculateAge } from './Calculate Age/calculate-age.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DirectivesComponent } from './directives/directives.component';
import { ChildComponentComponent } from './child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonComponent,
    UserRegistrationComponent,
    CheckActivityComponent,
    CalculateAge,
    ProductListComponent,
    DirectivesComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
