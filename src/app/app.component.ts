import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titre : string = 'lucien';
  private nbClicks : number = 0;

  public titreMajuscule(): string {
    return this.titre.toUpperCase();
  }

  public onClickButton() {
    this.nbClicks++;
  }

  public nombreClics(): number {
    return this.nbClicks;
  }

  public resetCompteur() {
    this.nbClicks = 0;
  }
}
