import { Component, OnInit } from '@angular/core';
import {PetService} from '../pet.service';
import {Pet} from '../pet';
import {ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.petService.getPet(+params['id']))
      .subscribe((pet: Pet) => this.pet = pet);
  }

}
