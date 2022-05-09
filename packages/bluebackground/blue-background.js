
import {LitElement, html, css} from 'lit';

class BlueBackground extends LitElement {

  static get styles() {
    return css`
      ::slotted(*) {
        background-color: blue;
        color: white;
        padding: 20px 10px;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <slot name="content"></slot>
    `;

  }

}

window.customElements.define('blue-background', BlueBackground)