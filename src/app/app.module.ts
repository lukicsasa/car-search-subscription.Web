import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionService } from './shared/services/session.service';
import { AlertService } from './components/alert/alert.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { RequestService } from './shared/services/request.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';
import { AddSubscriptionComponent } from './components/add-subscription/add-subscription.component';
import { FormatDatePipe } from './shared/pipes/format-date.pipe';
import { SubscriptionComponent } from './components/home/subscription/subscription.component';
import { OfflineHeaderComponent } from './shared/components/offline-header/offline-header.component';
import { DisabledOfflineDirective } from './shared/directives/disabled-offline.directive';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    AlertComponent,
    AddSubscriptionComponent,
    FormatDatePipe,
    SubscriptionComponent,
    OfflineHeaderComponent,
    DisabledOfflineDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [SessionService, AlertService, AuthGuard, RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
