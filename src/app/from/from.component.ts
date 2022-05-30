import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
  isUserModif: boolean;
  user: any;
  userBd: User;
  iduserRoute: number;

  constructor(private fb: FormBuilder,
              private http: HttpClient, private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
  }


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
      }
    );

    this.iduserRoute = +this.route.snapshot.params['id'];
    if (this.iduserRoute) {
      this.userService.getUser(this.iduserRoute).subscribe(
        (user: User) => {
          this.userBd = user;
        }
      )
      setTimeout(() => {
        this.updateUser(this.userBd);
      }, 20)
    }

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


  onSubmit() {
    const userForm = this.user.value;
    delete userForm.newsInputs;
    const add = userForm.address.numeroRue + '$' + userForm.address.nomRue + '$' + userForm.address.cp + '$'
      + userForm.address.ville;
    delete userForm.address;
    userForm.address = add;
    const btnModif = document.getElementById('btnSubmitModif');
    if (btnModif) {
      this.iduserRoute = +this.route.snapshot.params['id'];
      userForm.iduser = this.iduserRoute;
      this.userService.modifierUser(userForm).subscribe(res => {
        if (res.status === 200) {
          console.log('modifier ok')
        } else {
          console.log('err cante modifier user');
        }
      });
      this.isUserModif = false;
    } else {
      this.userService.addUser(userForm).subscribe();
    }
    this.router.navigateByUrl(`abonnees`);
  }

}
