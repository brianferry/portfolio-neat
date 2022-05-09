
import {LitElement, html, css} from 'lit';

class BfiButton extends LitElement {

  static get styles() {
    return css`

    a {
        -moz-transition: color 0.2s ease, border-bottom-color 0.2s ease;
        -webkit-transition: color 0.2s ease, border-bottom-color 0.2s ease;
        -ms-transition: color 0.2s ease, border-bottom-color 0.2s ease;
        transition: color 0.2s ease, border-bottom-color 0.2s ease;
        border-bottom: dotted 1px rgba(160, 160, 160, 0.65);
        color: inherit;
        text-decoration: none;
    }

    a:before {
        -moz-transition: color 0.2s ease;
        -webkit-transition: color 0.2s ease;
        -ms-transition: color 0.2s ease;
        transition: color 0.2s ease;
    }

    a:hover {
        border-bottom-color: transparent;
        color: #2ebaae !important;
    }

    a:hover:before {
        color: #2ebaae !important;
    }

    .button {
        -moz-appearance: none;
        -webkit-appearance: none;
        -ms-appearance: none;
        appearance: none;
        -moz-transition: background-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
        -webkit-transition: background-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
        -ms-transition: background-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
        transition: background-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
        background-color: transparent;
        border: 0;
        box-shadow: inset 0 0 0 1px rgba(160, 160, 160, 0.3);
        color: #3c3b3b !important;
        cursor: pointer;
        display: inline-block;
        font-family: "Raleway", Helvetica, sans-serif;
        font-size: 0.6em;
        font-weight: 800;
        height: 4.8125em;
        letter-spacing: 0.25em;
        line-height: 4.8125em;
        padding: 0 2.5em;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        white-space: nowrap;
    }

    .button:hover {
        box-shadow: inset 0 0 0 1px #2ebaae;
        color: #2ebaae !important;
    }

    .button:hover:active {
        background-color: rgba(46, 186, 174, 0.05);
    }

    .button:before,
    .button:after {
        color: #aaaaaa;
        position: relative;
    }

    .button:before {
        left: -1em;
        padding: 0 0 0 0.75em;
    }

    .button:after {
        left: 1em;
        padding: 0 0.75em 0 0;
    }

    .button.large {
        font-size: 0.7em;
        padding: 0 3em;
    }

    `;
  }

  static properties = {
    url: { type: String, reflect: true },
    text: { type: String, reflect: true }
  }

  constructor() {
    super();
  }

  render() {
    return html`
        <a href="${this.url}" class="button large">${this.text}</a>
    `;

  }

}

window.customElements.define('bfi-button', BfiButton)