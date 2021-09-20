import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-display',
  template: `<counter-component [message]="'Hello world'" (tick)=counterTick($event)></counter-component>
  <div>
    <p>Message : {{message}} </p>
    <p>Itération : {{counter}}</p></div>`
})

export class DisplayComponent {
  public counter: number = 0;
  public message: string = '?';

  public counterTick(message: string): void {
    this.message = message;
    this.counter++;
  }
}

@Component({
  selector:'counter-component',
  template: `
     <input id="intervalInput" value="{{speed}}" [(ngModel)]="speed"/>
     <button (click)="repeat()" id="intervalSetButton">Set interval</button>
     <button (click)="this.subscription.unsubscribe();">stop</button>
     <p> Vitesse {{speed}} ms</p>
     <p style="color: brown; font-weight: bold" *ngIf="!isNumeric(speed)"> ce message n'est pas un interval valide </p>
  `
})
export class CounterComponent {
  @Input() message: string = '';
  public speed: string = '1000';
  @Output() tick = new EventEmitter();
  subscription: Subscription = new Subscription();

  onClick(): void {
    this.tick.emit(this.message);
    console.log(this.message);
  }

  repeat(): void{
    if (this.isNumeric(this.speed)) {
      const source = interval(parseInt(this.speed));
      this.subscription = source.subscribe(val => this.onClick());
    }
  }

  isNumeric(value: string): boolean {
    return /^-?\d+$/.test(value);
  }
}
