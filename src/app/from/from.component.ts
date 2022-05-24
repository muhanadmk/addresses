import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { User } from '../../user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
  isUserModif: boolean;
  user: any;

  constructor(private fb: FormBuilder,
              private http: HttpClient, private userService: UserService,
              private router: Router
  ) {
  }

  //users$ :Observable<User[]>;

  ngOnInit(): void {
    this.user = this.fb.group({
        nom: ['', Validators.required],
        prenom: [''],
        sex: [''],
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
  }

  updateUser(user: User): void {
    this.isUserModif = true;
    this.user.patchValue({
      nom: user.nom,
      prenom: user.prenom,
      sex: user.sex,
      email: user.email,
      date_de_naissance: user.date_de_naissance,
      address: {
        numeroRue: '99',
        nomRue: 'crosne',
        cp: '54000',
        ville: 'Nancy'
      }
    })
  }

  get newsInputs() {
    return this.user.get('newsInputs') as FormArray;
  }

  addNewsInputs() {
    this.newsInputs.push(this.fb.control(''))
  }

  onSubmit() {

    const userForm = this.user.value;
    delete userForm.newsInputs;
    const add = userForm.address.numeroRue + '$' + userForm.address.nomRue + '$' + userForm.address.cp + '$'
      + userForm.address.ville;
    delete userForm.address;
    userForm.address = add;
    console.log(userForm)
    setTimeout(() => {
      if (this.isUserModif) {
        this.userService.modifierUser(userForm);
        this.router.navigateByUrl(`abonnees`);
        this.isUserModif = false;
      }
      this.userService.addUser(userForm).subscribe((value: any) => console.log(value))
      this.router.navigateByUrl(`abonnees`);
    }, 50)
  }

}
