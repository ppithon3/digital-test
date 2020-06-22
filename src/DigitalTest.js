import { html, css, LitElement } from 'lit-element';

export class DigitalTest extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--digital-test-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
      before: { type: Number, value:0}
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.before = this.counter;
    this.counter = this._getRandomInt(100);
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>

      <!-- Or to conditionally show/hide a template -->
      <div>
        ${this.before<this.counter
          ? html`
              supérieur !
            `
          : html`inférieur !`}
      </div>



    `;
  }

  _getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
