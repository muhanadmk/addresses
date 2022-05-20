import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  user = this.fb.group({
      nom: ['', Validators.required],
      prenom: [''],
      civilite: [''],
      date_de_naissance: [''],
      email: [''],
      address: this.fb.group({
        numeroRue: [''],
        nomRue: [''],
        cp: [''],
        ville: ['']
      }),
      newsInputs: this.fb.array([
        this.fb.control('')
      ])
    }
  );

  updateUser(): void {
    this.user.patchValue({
      nom: 'Almokdad',
      prenom: 'muhanad',
      civilite: 'Homme',
      email: 'mouhand@gmail.com',
      date_de_naissance: '02/01/1993',
      address: {
        numeroRue: '99',
        nomRue: 'crosne',
        cp: '54000',
        ville: 'Nancy'
      }
    })
  }
  get newsInputs(){
    return this.user.get('newsInputs') as FormArray;
  }
  addNewsInputs(){
    this.newsInputs.push(this.fb.control(''))
  }
  onSubmit() {
    console.log(this.user.value);
  }
}
