import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets : Pet [];

  constructor(private petService: PetService) {}

  ngOnInit() {
    //var ajson = JSON.parse('{"category":"cat","info":{"name":"Marbles","photoUrls":["todo"],"tags":[{"description":"Domestic Short Hair"},{"health":"Vaccinations up to date, spayed / neutered."},{"good in home with":"other cats"},{"age":"young"},{"sex":"female"}]},"status":"available","zip":19702,"contact":{"phone":"2017801011","address1":"","address2":""}}');
  	this.petService.getPets()
      .subscribe(pets => this.pets = pets);
  }

}
