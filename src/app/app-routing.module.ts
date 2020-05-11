import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './pages/products/products.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DeliveryAndPaymentComponent } from './pages/delivery-and-payment/delivery-and-payment.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { GrillComponent } from './pages/categories/grill/grill.component';
import { BlenderComponent } from './pages/categories/blender/blender.component';
import { ToasterComponent } from './pages/categories/toaster/toaster.component';
import { MixerComponent } from './pages/categories/mixer/mixer.component';
import { PrinterComponent } from './pages/categories/printer/printer.component';
import { HeadphoneComponent } from './pages/categories/headphone/headphone.component';
import { KeyboardComponent } from './pages/categories/keyboard/keyboard.component';
import { MouseComponent } from './pages/categories/mouse/mouse.component';
import { LoudSpeakerComponent } from './pages/categories/loud-speaker/loud-speaker.component';
import { GrillDetailsComponent } from './pages/categories/grill/grill-details/grill-details.component';
import { BlenderDetailsComponent } from './pages/categories/blender/blender-details/blender-details.component';
import { ToasterDetailsComponent } from './pages/categories/toaster/toaster-details/toaster-details.component';
import { MixerDetailsComponent } from './pages/categories/mixer/mixer-details/mixer-details.component';
import { PrinterDetailsComponent } from './pages/categories/printer/printer-details/printer-details.component';
import { HeadphoneDetailsComponent } from './pages/categories/headphone/headphone-details/headphone-details.component';
import { KeyboardDetailsComponent } from './pages/categories/keyboard/keyboard-details/keyboard-details.component';
import { MouseDetailsComponent } from './pages/categories/mouse/mouse-details/mouse-details.component';
import { LoudSpeakerDetailsComponent } from './pages/categories/loud-speaker/loud-speaker-details/loud-speaker-details.component';
import { GrillListComponent } from './pages/categories/grill/grill-list/grill-list.component';
import { BasketComponent } from './pages/basket/basket.component';
import { BlenderListComponent } from './pages/categories/blender/blender-list/blender-list.component';
import { HeadphoneListComponent } from './pages/categories/headphone/headphone-list/headphone-list.component';
import { KeyboardListComponent } from './pages/categories/keyboard/keyboard-list/keyboard-list.component';
import { LoudSpeakerListComponent } from './pages/categories/loud-speaker/loud-speaker-list/loud-speaker-list.component';
import { MouseListComponent } from './pages/categories/mouse/mouse-list/mouse-list.component';
import { PrinterListComponent } from './pages/categories/printer/printer-list/printer-list.component';
import { MixerListComponent } from './pages/categories/mixer/mixer-list/mixer-list.component';
import { ToasterListComponent } from './pages/categories/toaster/toaster-list/toaster-list.component';


const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent },
    { path: 'delivery-and-payments', component: DeliveryAndPaymentComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'basket', component: BasketComponent },

    {
        path: 'grill', component: GrillComponent,
        children: [
            { path: '', component: GrillListComponent },
            { path: ':grillId', component: GrillDetailsComponent },
        ]
    },

    {
        path: 'blender', component: BlenderComponent,
        children: [
            { path: '', component: BlenderListComponent },
            { path: ':blenderId', component: BlenderDetailsComponent },
        ]
    },

    {
        path: 'toaster', component: ToasterComponent,
        children: [
            { path: '', component: ToasterListComponent },
            { path: ':toasterId', component: ToasterDetailsComponent },
        ]
    },

    {
        path: 'mixer', component: MixerComponent,
        children: [
            { path: '', component: MixerListComponent },
            { path: ':mixerId', component: MixerDetailsComponent },
        ]
    },

    {
        path: 'printer', component: PrinterComponent,
        children: [
            { path: '', component: PrinterListComponent },
            { path: ':printerId', component: PrinterDetailsComponent },
        ]
    },

    {
        path: 'headphone', component: HeadphoneComponent,
        children: [
            { path: '', component: HeadphoneListComponent },
            { path: ':headphoneId', component: HeadphoneDetailsComponent },
        ]
    },

    {
        path: 'keyboard', component: KeyboardComponent,
        children: [
            { path: '', component: KeyboardListComponent },
            { path: ':keyboardId', component: KeyboardDetailsComponent },
        ]
    },

    {
        path: 'mouse', component: MouseComponent,
        children: [
            { path: '', component: MouseListComponent },
            { path: ':mouseId', component: MouseDetailsComponent },
        ]
    },

    {
        path: 'loud-speaker', component: LoudSpeakerComponent,
        children: [
            { path: '', component: LoudSpeakerListComponent },
            { path: ':loud-speakerId', component: LoudSpeakerDetailsComponent },
        ]
    },

    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }