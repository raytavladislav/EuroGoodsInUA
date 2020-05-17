import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { CarouselComponent } from './pages/products/carousel/carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DeliveryAndPaymentComponent } from './pages/delivery-and-payment/delivery-and-payment.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GrillComponent } from './pages/categories//grill/grill.component';
import { BlenderComponent } from './pages/categories//blender/blender.component';
import { ToasterComponent } from './pages/categories/toaster/toaster.component';
import { MixerComponent } from './pages/categories/mixer/mixer.component';
import { PrinterComponent } from './pages/categories/printer/printer.component';
import { HeadphoneComponent } from './pages/categories/headphone/headphone.component';
import { KeyboardComponent } from './pages/categories/keyboard/keyboard.component';
import { MouseComponent } from './pages/categories/mouse/mouse.component';
import { LoudSpeakerComponent } from './pages/categories/loud-speaker/loud-speaker.component';
import { BlenderDetailsComponent } from './pages/categories/blender/blender-details/blender-details.component';
import { GrillDetailsComponent } from './pages/categories/grill/grill-details/grill-details.component';
import { HeadphoneDetailsComponent } from './pages/categories/headphone/headphone-details/headphone-details.component';
import { KeyboardDetailsComponent } from './pages/categories/keyboard/keyboard-details/keyboard-details.component';
import { LoudSpeakerDetailsComponent } from './pages/categories/loud-speaker/loud-speaker-details/loud-speaker-details.component';
import { MixerDetailsComponent } from './pages/categories/mixer/mixer-details/mixer-details.component';
import { MouseDetailsComponent } from './pages/categories/mouse/mouse-details/mouse-details.component';
import { PrinterDetailsComponent } from './pages/categories/printer/printer-details/printer-details.component';
import { ToasterDetailsComponent } from './pages/categories/toaster/toaster-details/toaster-details.component';
import { FilterBySearchPipe } from './shared/pipes/filterBySearch/filter-by-search.pipe';
import { GrillListComponent } from './pages/categories/grill/grill-list/grill-list.component';
import { BasketComponent } from './pages/basket/basket.component';
import { BlenderListComponent } from './pages/categories/blender/blender-list/blender-list.component';
import { HeadphoneListComponent } from './pages/categories/headphone/headphone-list/headphone-list.component';
import { KeyboadrListComponent } from './pages/categories/keyboard/keyboadr-list/keyboadr-list.component';
import { KeyboardListComponent } from './pages/categories/keyboard/keyboard-list/keyboard-list.component';
import { LoudSpeakerListComponent } from './pages/categories/loud-speaker/loud-speaker-list/loud-speaker-list.component';
import { MixerListComponent } from './pages/categories/mixer/mixer-list/mixer-list.component';
import { MouseListComponent } from './pages/categories/mouse/mouse-list/mouse-list.component';
import { PrinterListComponent } from './pages/categories/printer/printer-list/printer-list.component';
import { ToasterListComponent } from './pages/categories/toaster/toaster-list/toaster-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserOrderComponent } from './pages/basket/user-order/user-order.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    CarouselComponent,
    PageNotFoundComponent,
    DeliveryAndPaymentComponent,
    AboutComponent,
    ContactsComponent,
    GrillComponent,
    BlenderComponent,
    ToasterComponent,
    MixerComponent,
    PrinterComponent,
    HeadphoneComponent,
    KeyboardComponent,
    MouseComponent,
    LoudSpeakerComponent,
    BlenderDetailsComponent,
    GrillDetailsComponent,
    HeadphoneDetailsComponent,
    KeyboardDetailsComponent,
    LoudSpeakerDetailsComponent,
    MixerDetailsComponent,
    MouseDetailsComponent,
    PrinterDetailsComponent,
    ToasterDetailsComponent,
    FilterBySearchPipe,
    GrillListComponent,
    BasketComponent,
    BlenderListComponent,
    HeadphoneListComponent,
    KeyboadrListComponent,
    KeyboardListComponent,
    LoudSpeakerListComponent,
    MixerListComponent,
    MouseListComponent,
    PrinterListComponent,
    ToasterListComponent,
    UserOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
