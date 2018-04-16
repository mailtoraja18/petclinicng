import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PETS } from './mock-pets';

@Injectable()
export class PetService {
  constructor() { }
  getPets(): Observable<Pet[]> {
    return of(PETS);
  }

  getPet(id): Observable<Pet> {
    return of(PETS.find(function(pet: Pet) {
      return pet.id === id;
    }));
  }
}
