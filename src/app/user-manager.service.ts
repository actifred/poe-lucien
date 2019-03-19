import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {
  private _userList: User[];
  public familyNames = ['Starr', 'Lennon', 'McCartney', 'Harrison'];
  public firstNames = ['John', 'Paul', 'Ringo', 'Georges', 'Lynda', 'Yoko'];

  constructor() {
    this._userList = [];

    for (let k=0; k<4; k++) {
      this.addUser();
    }
  }

  public getList(): User[] {
    return this._userList;
  }

  public addUser(): void {
    let itBe = Math.floor(Math.random() * this.familyNames.length);
    let meDown = Math.floor(Math.random() * this.firstNames.length);
    this._userList.push(new User(this.firstNames[meDown], this.familyNames[itBe]));
  }
}
