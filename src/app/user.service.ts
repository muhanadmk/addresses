import { Injectable } from '@angular/core';
import { User } from '../user';
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
    return this.http.post<User>('http://localhost:3000/api/user', user)
  }

  getUser(idUser: number): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/api/user/${idUser}`)
  }

  deleteUser(iduser: number): Observable<User> {
    return this.http.delete<User>(`http://localhost:3000/api/user/${iduser}`)
  }

  modifierUser(user: User) {
    return this.http.put<User>(`http://localhost:3000/api/user//${user.iduser}`,
      user);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed : ${error.messsage}`);
      return of(result as T)
    };
  }
}
