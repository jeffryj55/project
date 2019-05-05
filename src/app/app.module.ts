import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from './location/location.component';

import { BookComponent } from './book/book.component';
import { MeetingroomsComponent } from './meetingrooms/meetingrooms.component';
import { BookingsComponent } from './bookings/bookings.component';
import { YourmeetingsComponent } from './yourmeetings/yourmeetings.component';
import { BookmeetComponent } from './bookmeet/bookmeet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    LocationComponent,

    BookComponent,
    MeetingroomsComponent,
    BookingsComponent,
    YourmeetingsComponent,
    BookmeetComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
