import { Component } from "plumejs";

class CardComponent {
  render() {
    return `
            <section class="card">
                I'm card component
            </section>
        `;
  }
}

Component({ 
    selector: "app-card", 
    styles: `
        .card {
            padding: 10px;
            border: 1px solid;
            border-style: dashed;
        }
    ` 
})(CardComponent);
