import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';

import { PetService } from './pet.service';
import { PetComponent } from './pet/pet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'pets/:id', component: PetComponent },
  {
    path: 'pets',
    component: PetsComponent,
    data: { title: 'Pet List' }
  },
  { path: '',
    redirectTo: '/pets',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [
    PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
