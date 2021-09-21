# CodingameCATSQ25

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## SUJET

![alt text](https://github.com/Polyrayan/codingameCATS-Q25/blob/master/part1.png?raw=true)

![alt text](https://github.com/Polyrayan/codingameCATS-Q25/blob/master/part2.png?raw=true)

## Code de départ 
```typescript
// Angular 8.x code
import { Component, NgModule, Input, Output } from '@angular/core';
 
 
@Component({
  selector:'counter-component',
  template: `
     <input id="intervalInput"/>
     <button id="intervalSetButton">Set interval</button>
  `
})
export class CounterComponent {

}
 
// #region Preview
@Component({
  selector:'display-component',
  template: `
    <counter-component [message]="'Hello world'" (tick)=counterTick($event)></counter-component>
    <div>{{message}} {{counter}}</div>
  `
})
export class DisplayComponent {
  public counter: number = 0;
  public message: string;
 
  public counterTick(message: string): void {
    this.message = message;
    this.counter++;
  }
}
 
@Component({
    template: `<display-component></display-component>`
})
export class PreviewComponent { }
// #endregion Preview
 
// #region Module declaration - Do not Change

```
