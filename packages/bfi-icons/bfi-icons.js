
import {LitElement, html, css} from 'lit';

class BfiIcons extends LitElement {

  static get styles() {
    return css`
        section, a, p, ul, li {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }

        section { 
            display: block;
        }

        ul {
            list-style: none;
            margin: 0 0 2em 0;
            padding-left: 1em;
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
    
        b {
            color: #3c3b3b;
            font-weight: 700;
        }

        p {
            margin: 0 0 2em 0;
        }

        ul.icons {
            cursor: default;
            list-style: none;
            padding-left: 0;
        }

        ul.icons li {
            display: inline-block;
            padding: 0 1em 0 0;
        }

        ul.icons li:last-child {
            padding-right: 0;
        }

        ul.icons li > * {
            border: 0;
        }

        ul.icons li > * .label {
            display: none;
        }

        #footer {
            border-top: solid 1px rgba(160, 160, 160, 0.3);
            margin: 3em 0 0 0;
            padding: 3em 0 0 0;
        }

        #footer .icons {
            color: #aaaaaa;
        }

        #footer .copyright {
            color: #aaaaaa;
            font-family: "Raleway", Helvetica, sans-serif;
            font-size: 0.5em;
            font-weight: 400;
            letter-spacing: 0.25em;
            text-transform: uppercase;
        }

        .icon {
            text-decoration: none;
            border-bottom: none;
            position: relative;
        }

        .icon:before {
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            display: inline-block;
            font-style: normal;
            font-variant: normal;
            text-rendering: auto;
            line-height: 1;
            text-transform: none !important;
            font-family: 'Font Awesome 5 Free';
            font-weight: 400;
        }

        .icon > .label {
            display: none;
        }

        .icon:before {
            line-height: inherit;
        }

        .icon.solid:before {
            font-weight: 900;
        }

        .icon.brands:before {
            font-family: 'Font Awesome 5 Brands';
        }

        .icon.suffix:before {
            float: right;
        }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
        <link rel="stylesheet" href="./static/css/fontawesome.css">
        <section id="footer">
            <ul class="icons">
                <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                <li><a href="#" class="icon solid fa-rss"><span class="label">RSS</span></a></li>
                <li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li>
            </ul>
            <p class="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>. Images: <a href="http://unsplash.com">Unsplash</a>.</p>
        </section>
    `;

  }

}

window.customElements.define('bfi-icons', BfiIcons)