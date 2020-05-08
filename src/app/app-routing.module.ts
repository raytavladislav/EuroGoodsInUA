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


const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent },
    { path: 'delivery-and-payments', component: DeliveryAndPaymentComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactsComponent },

    { path: 'grill', component: GrillComponent,
        children: [
            { path: '', redirectTo: 'grill', pathMatch: 'full' },
            { path: 'grill/:productId', component: GrillDetailsComponent },
        ] },
    { path: 'grill/:productId', component: GrillDetailsComponent },


    { path: 'blender', component: BlenderComponent,
        children: [
            { path: '', redirectTo: 'blender', pathMatch: 'full' },
            { path: 'blender/:productId', component: BlenderDetailsComponent },
        ] },
    { path: 'blender/:productId', component: BlenderDetailsComponent },


    { path: 'toaster', component: ToasterComponent,
        children: [
            { path: '', redirectTo: 'toaster', pathMatch: 'full' },
            { path: 'toaster/:productId', component: ToasterDetailsComponent },
        ] },
    { path: 'toaster/:productId', component: ToasterDetailsComponent },


    { path: 'mixer', component: MixerComponent,
        children: [
            { path: '', redirectTo: 'mixer', pathMatch: 'full' },
            { path: 'mixer/:productId', component: MixerDetailsComponent },
        ] },
    { path: 'mixer/:productId', component: MixerDetailsComponent },


    { path: 'printer', component: PrinterComponent,
        children: [
            { path: '', redirectTo: 'printer', pathMatch: 'full' },
            { path: 'printer/:productId', component: PrinterDetailsComponent },
        ] },
    { path: 'printer/:productId', component: PrinterDetailsComponent },


    { path: 'headphone', component: HeadphoneComponent,
        children: [
            { path: '', redirectTo: 'headphone', pathMatch: 'full' },
            { path: 'headphone/:productId', component: HeadphoneDetailsComponent },
        ] },
    { path: 'headphone/:productId', component: HeadphoneDetailsComponent },


    { path: 'keyboard', component: KeyboardComponent,
        children: [
            { path: '', redirectTo: 'keyboard', pathMatch: 'full' },
            { path: 'keyboard/:productId', component: KeyboardDetailsComponent },
        ] },
    { path: 'keyboard/:productId', component: KeyboardDetailsComponent },


    { path: 'mouse', component: MouseComponent,
        children: [
            { path: '', redirectTo: 'mouse', pathMatch: 'full' },
            { path: 'mouse/:productId', component: MouseDetailsComponent },
        ] },
    { path: 'mouse/:productId', component: MouseDetailsComponent },


    { path: 'loud-speaker', component: LoudSpeakerComponent,
        children: [
            { path: '', redirectTo: 'loud-speaker', pathMatch: 'full' },
            { path: 'loud-speaker/:productId', component: LoudSpeakerDetailsComponent },
        ] },
    { path: 'loud-speaker/:productId', component: LoudSpeakerDetailsComponent },
    
    { path: '**', component: PageNotFoundComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }