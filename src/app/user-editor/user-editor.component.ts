import { Component, OnInit } from '@angular/core';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {

  constructor(private _userManager: UserManagerService) { }

  ngOnInit() {
  }

  onAddUser() {
    this._userManager.addUser();
  }

}
