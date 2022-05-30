import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { MapComponent } from '../map/map.component';
import { FromComponent } from '../from/from.component';

@Component({
  selector: 'app-aboonees',
  templateUrl: './aboonees.component.html',
  styleUrls: ['./aboonees.component.css']
})
export class AbooneesComponent implements OnInit {
  users$: Observable<User[]>;
  isUserModif: boolean = false;
  abonnees: boolean = true;


  constructor(private http: HttpClient, private userService: UserService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getAllUsers();
  }

  onAboonee(idUser: number) {
    this.router.navigateByUrl(`abonnees/${idUser}`);
  }

  deleteUser(iduser: number) {
    this.userService.deleteUser(iduser).subscribe(res => {
      if (res.status == 200 && res.body === 'user is deleted !!!') {
        this.users$ = this.userService.getAllUsers();
      } else {
        console.log('err cante delete user');
      }
    });
  }

  modifierUser(iduser: number) {
    this.router.navigateByUrl(`newsletter/${iduser}`);
  }
}
