import { Component } from "plumejs";

class AppComponent {
  render() {
    return `<h1>Hello World!! I'm host application</h1>`;
  }
}

Component({ selector: "app-root-host" })(AppComponent);
