import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionService } from './shared/services/session.service';
import { AlertService } from './components/alert/alert.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { RequestService } from './shared/services/request.service';
import { LoginService } from './components/login/login.service';
import { RegisterService } from './components/register/register.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';
import { HomeService } from './components/home/home.service';
import { AddSubscriptionComponent } from './components/add-subscription/add-subscription.component';
import { AddSubscriptionService } from './components/add-subscription/add-subscription.service';
import { environment } from '../environments/environment.prod';
import { NotificationService } from './shared/services/notification.service';
import { FormatDatePipe } from './shared/pipes/format-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    AlertComponent,
    AddSubscriptionComponent,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  providers: [SessionService, AlertService, AuthGuard, RequestService, RegisterService, HomeService, AddSubscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
