import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../models/user'
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
  // statusCode: number;
  isUserModif: boolean = false;
  abonnees: boolean = true;
  @ViewChild("formComp") fromComponent: FromComponent;


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
    //console.log(iduser)
    // console.log(this.userService.deleteUser(iduser))

    this.userService.deleteUser(iduser).subscribe(res => {
      if (res.status == 200) {
        this.users$.pipe(

        )
      } else {

      }

    });
  }

  modifierUser(user: User) {
    this.abonnees = false;
    this.isUserModif = true;
    setTimeout(() => {
      this.fromComponent.updateUser(user);
    }, 2)
  }
}
