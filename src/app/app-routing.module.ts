import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component'
import{FirstComponent} from './first/first.component'
import{LocationComponent} from './location/location.component'
import{MeetingroomsComponent} from './meetingrooms/meetingrooms.component'
import{BookingsComponent} from './bookings/bookings.component'
import{BookComponent} from './book/book.component'
import{BookmeetComponent} from './bookmeet/bookmeet.component'
import{YourmeetingsComponent} from './yourmeetings/yourmeetings.component'

const routes: Routes = [{ path:'',pathMatch:'full',redirectTo:'first'},
{
  path:'home',
  component: HomeComponent
},
{
  path:'yourmeetings',
  component: YourmeetingsComponent
},
{
  path:'meetingrooms',
  component: MeetingroomsComponent
}
,
{
  path:'book/:id',
  component: BookComponent
}
,
{
  path:'bookmeet/:id',
  component: BookmeetComponent
}
,
{
  path:'bookings',
  component: BookingsComponent
},
{
  path:'first',
  component: FirstComponent
}
,
{
  path:'location',
  component: LocationComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
