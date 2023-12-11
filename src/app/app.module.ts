import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BaseComponent } from './views/base/base.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { HomeComponent } from './views/home/home.component';
import { CardComponent } from './views/card/card.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';



import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MultiCheckerComponent } from './components/multi-checker/multi-checker.component';
import { FormslayoutComponent } from './components/formslayout/formslayout.component';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BaseComponent,
    AccordionComponent,
    HomeComponent,
    CardComponent,
    DropDownComponent,
    DatePickerComponent,
    DropDownComponent,
    MultiCheckerComponent,
    FormslayoutComponent,
    TableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule
    
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
