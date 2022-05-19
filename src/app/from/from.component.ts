import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  user = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      civilite: new FormControl(''),
      date_de_naissance: new FormControl(''),
      email: new FormControl(''),
      address: new FormGroup({
        numeroRue: new FormControl(''),
        nomRue: new FormControl(''),
        cp: new FormControl(''),
        ville: new FormControl('')
      }),
    }
  )

  onSubmit() {
    console.log(this.user.value);
  }
}
