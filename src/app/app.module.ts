import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './Registration Form/user-registration.component';
import { CheckActivityComponent } from './CheckActivitiy/check-activity.component';
import { CalculateAge } from './Calculate Age/calculate-age.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DirectivesComponent } from './directives/directives.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { AuthIntercepterInterceptor } from './auth-intercepter.interceptor';
import { HomeComponent } from './fruit/home/home.component';
import { CreateComponent } from './fruit/create/create.component';
import { EditComponent } from './fruit/edit/edit.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { TodolistComponent } from './todolist/todolist/todolist.component';
import { CustomeDirectiveDirective } from './custome-directive.directive';
import { ObservableComponent } from './observables/observable/observable.component';
import { RxjsOprationsComponent } from './rxjs-oprations/rxjs-oprations.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    CheckActivityComponent,
    CalculateAge,
    ProductListComponent,
    DirectivesComponent,
    ChildComponentComponent,
    TemplateDrivenFormComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    ViewChildComponent,
    TodolistComponent,
    CustomeDirectiveDirective,
    ObservableComponent,
    RxjsOprationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthIntercepterInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
