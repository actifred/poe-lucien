import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  nbClicks: number = 0;

  @Input() titreComposant: string = "Mon titre par défaut";

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
