import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h1 (click)="handleClick($event)">
        {{ message }}
      </h1>
      <input
        [value]="message"
        type="text"
        (input)="newMessage = messageInput.value"
        #messageInput
      />
      <p>{{ messageInput.value }}</p>
    </div>
  `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;
  newMessage!: string;

  constructor() {}

  ngOnInit() {
    this.message = 'Hello Angular!';
    this.newMessage = this.message;
  }

  handleClick(event: Event) {
    console.log(event);
  }
}
