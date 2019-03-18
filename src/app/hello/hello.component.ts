import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  nbClicks: number = 0;
  maxLocal: number;

  @Input() titreComposant: string = "Mon titre par défaut";
  @Output() maxAtteint = new EventEmitter();

  constructor() {
    this.maxLocal = Math.floor(Math.random() * 10) + 1;
  }

  public onClickButton() {
    if (this.nbClicks === this.maxLocal) {
      this.maxAtteint.emit(this.maxLocal);
    } else {
      this.nbClicks++;
    }
  }

  public nombreClics(): number {
    return this.nbClicks;
  }

  public resetCompteur() {
    this.nbClicks = 0;
  }
}
