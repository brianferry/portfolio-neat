
import {LitElement, html, css} from 'lit';

class BfiNavigation extends LitElement {

  static get styles() {
    return css`
        header, h1, a {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
            display: block;
        }
        header p {
            font-family: "Raleway", Helvetica, sans-serif;
            font-size: 0.7em;
            font-weight: 400;
            letter-spacing: 0.25em;
            line-height: 2.5;
            margin-top: -1em;
            text-transform: uppercase;
        }
        h1 {
            color: #3c3b3b;
            font-family: "Raleway", Helvetica, sans-serif;
            font-weight: 800;
            letter-spacing: 0.25em;
            line-height: 1.65;
            margin: 0 0 1em 0;
            text-transform: uppercase;
        }
        h1 a {
            color: inherit;
			border-bottom: 0;
        }
        #header {
            display: -moz-flex;
            display: -webkit-flex;
            display: -ms-flex;
            display: flex;
            -moz-justify-content: space-between;
            -webkit-justify-content: space-between;
            -ms-justify-content: space-between;
            justify-content: space-between;
            background-color: #ffffff;
            border-bottom: solid 1px rgba(160, 160, 160, 0.3);
            height: 3.5em;
            left: 0;
            line-height: 3.5em;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 10000;
        }

        #header h1 {
			height: inherit;
			line-height: inherit;
			padding: 0 0 0 1.5em;
			white-space: nowrap;
		}

        #header h1 a {
            font-size: 0.7em;
        }

        @media screen and (max-width: 736px) {

			#header {
				height: 2.75em;
				line-height: 2.75em;
			}

				#header h1 {
					padding: 0 0 0 1em;
				}
		}

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
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
        <header id="header">
            <h1>
                <a href="/">Brian Ferry's Website</a>
            </h1>
        </header>
    `;

  }

}

window.customElements.define('bfi-navigation', BfiNavigation)