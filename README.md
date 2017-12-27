# iWeather
Weather app using Ionic 3

____
**Ionic**

Install
>npm install -g ionic@latest cordova

Create App From Tab Template
>ionic start iWeather tabs

Start App
>ionic serve

Generate New Page/Component
>ionic g page settings

Generate New Provider/Service
>ionic g provider weather

____
**Angular**

Button Click
><button (click)="readRainbow($event)">
  
One Way Binding
><p>Hello {{ponyName}}</p>

Two Way Binding
><my-cmp [(title)]="name">

Show/Hide Selection
><section *ngIf="showSection">
