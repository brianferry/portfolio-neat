import {LitElement, html, css} from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

class BfiHeader extends LitElement {
  static styles = css`
    ::slotted(*) {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      color: #3c3b3b;
      font-family: "Raleway", Helvetica, sans-serif;
      font-weight: 800;
      letter-spacing: 0.25em;
      line-height: 1.65;
      margin: 0 0 1em 0;
      text-transform: uppercase;
    }

    ::slotted(h1) > a, 
    ::slotted(h2) > a, 
    ::slotted(h3) > a, 
    ::slotted(h4) > a, 
    ::slotted(h5) > a, 
    ::slotted(h6) > a {
      color: inherit;
			border-bottom: 0;
    }

    ::slotted(h2) {
      font-size: 1.1em;
    }
  
    ::slotted(h3) {
      font-size: 0.9em;
    }
  
    ::slotted(h4) {
      font-size: 0.7em;
    }
  
    ::slotted(h5) {
      font-size: 0.7em;
    }
  
    ::slotted(h6) {
      font-size: 0.7em;
    }
  `;

  render() {
    return html`
      <slot>
      </slot>
    `
  }
}

window.customElements.define('bfi-header', BfiHeader)
