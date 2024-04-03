import { Component } from "plumejs";
import './card.component.js';

class AppComponent {
  render() {
    return `<h1>Hello World!! I'm todo application</h1><app-card></app-card>`;
  }
}

Component({ selector: "app-root-todo" })(AppComponent);
