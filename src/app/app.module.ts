import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BaseComponent } from './views/base/base.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { HomeComponent } from './views/home/home.component';
import { CardComponent } from './views/card/card.component';


import { defineLocale } from 'ngx-bootstrap/chronos';
import { enGbLocale } from 'ngx-bootstrap/locale';

defineLocale('en-gb', enGbLocale);


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BaseComponent,
    AccordionComponent,
    HomeComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-gb' },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
