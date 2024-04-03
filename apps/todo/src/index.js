import { Component } from "plumejs";
import "./card.component.js";

class AppComponent {
  render() {
    return `<h1>Hello World!! I'm todo application</h1><app-card></app-card>`;
  }
}

Component({
  selector: "app-root-todo",
  root: true,
  styles: `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 1rem;
    font-family: system-ui, sans-serif;
    color: black;
    background-color: white;
  }
  `,
})(AppComponent);
