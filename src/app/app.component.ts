import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titre : string = 'lucien';
  private nbClicks : number = 0;

  public titres: string[];

  constructor() {
    this.titres = ['Riri', 'Fifi', 'Loulou'];
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

  public onMaxAtteint(nouveauNom: string) {
    this.titre = nouveauNom;
  }
}
