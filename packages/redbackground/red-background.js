
import {LitElement, html, css} from 'lit';

class RedBackground extends LitElement {

  static get styles() {
    return css`
      ::slotted(*) {
        background-color: red;
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

window.customElements.define('red-background', RedBackground)