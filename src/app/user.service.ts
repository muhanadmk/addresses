import { Injectable } from '@angular/core';
import { User } from './models/user'
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/users');
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/users', user)
  }

  getUser(idUser: number): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/api/users/${idUser}`)
  }

  deleteUser(iduser: number) {
    return this.http.delete(`http://localhost:3000/api/users/${iduser}`, {observe: 'response'});
  }

  modifierUser(user: User) {
    return this.http.put<User>(`http://localhost:3000/api/users/${user.iduser}`,
      user, {observe: 'response'});
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed : ${error.messsage}`);
      return of(result as T)
    };
  }
}
