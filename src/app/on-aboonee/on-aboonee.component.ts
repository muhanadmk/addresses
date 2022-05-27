import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../models/user'
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-on-aboonee',
  templateUrl: './on-aboonee.component.html',
  styleUrls: ['./on-aboonee.component.css']
})
export class OnAbooneeComponent implements OnInit {
  user$: Observable<User>;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    const iduser = +this.route.snapshot.params['id'];
    console.log('id from url : ' + iduser)
    this.user$ = this.userService.getUser(iduser);
  }

}
