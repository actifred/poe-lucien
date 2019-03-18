import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  nbClicks: number = 0;

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
