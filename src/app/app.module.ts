import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { PortalComponent } from './portal/portal.component';
import { AnimalListComponent } from './animals/animal-list/animal-list.component';
import { AnimalDetailsComponent } from './animals/animal-details/animal-details.component';
import { AnimalComponent } from './animals/animal-list/animal/animal.component';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    PortalComponent,
    AnimalListComponent,
    AnimalDetailsComponent,
    AnimalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
