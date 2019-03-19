import { Component } from '@angular/core';
import { UserManagerService } from './user-manager.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titre : string = 'lucien';
  private nbClicks : number = 0;
  public isGameOver:boolean = false;
  public leGagnant:string;
  public leScore:number;

  public titres: string[];

  public users: User[];

  constructor(private _userManager: UserManagerService) {
    this.titres = ['Riri', 'Fifi', 'Loulou'];

    this.users = this._userManager.getList();
  }

  public uneVariable = "Le contenu de mon paragraphe";

  public titreMajuscule(): string {
    return this.titre.toUpperCase();
  }

  public onClickButton() {
    this.titres.push('Donald');
  }

  public nombreClics(): number {
    return this.nbClicks;
  }

  public resetCompteur() {
    this.nbClicks = 0;
  }

  public onMaxAtteint(nouveauNom: string, lenouveauMax: number) {
    this.titre = nouveauNom + " avec le max " + lenouveauMax;
    this.isGameOver = true;
    this.leGagnant = nouveauNom;
    this.leScore = lenouveauMax;
  }

  public onAddUser() {
    this._userManager.addUser();
  }
}
