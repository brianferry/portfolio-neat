
import {LitElement, html, css} from 'lit';

class BfiSidebar extends LitElement {

  static get styles() {
    return css`

        @include "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css";
        section, a, header, h2, p, ul, li {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }

        section, header { 
            display: block;
        }

        ul {
            list-style: none;
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
    
                strong, b {
                    color: #3c3b3b;
                    font-weight: 700;
                }
            
                em, i {
                    font-style: italic;
                }
            
                p {
                    margin: 0 0 2em 0;
                }
            
                h1, h2, h3, h4, h5, h6 {
                    color: #3c3b3b;
                    font-family: "Raleway", Helvetica, sans-serif;
                    font-weight: 800;
                    letter-spacing: 0.25em;
                    line-height: 1.65;
                    margin: 0 0 1em 0;
                    text-transform: uppercase;
                }
            
                    h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
                        color: inherit;
                        border-bottom: 0;
                    }
            
                h2 {
                    font-size: 1.1em;
                }
            
                h3 {
                    font-size: 0.9em;
                }
            
                h4 {
                    font-size: 0.7em;
                }
            
                h5 {
                    font-size: 0.7em;
                }
            
                h6 {
                    font-size: 0.7em;
                }
            
                sub {
                    font-size: 0.8em;
                    position: relative;
                    top: 0.5em;
                }
            
                sup {
                    font-size: 0.8em;
                    position: relative;
                    top: -0.5em;
                }
            
                blockquote {
                    border-left: solid 4px rgba(160, 160, 160, 0.3);
                    font-style: italic;
                    margin: 0 0 2em 0;
                    padding: 0.5em 0 0.5em 2em;
                }
            
                code {
                    background: rgba(160, 160, 160, 0.075);
                    border: solid 1px rgba(160, 160, 160, 0.3);
                    font-family: "Courier New", monospace;
                    font-size: 0.9em;
                    margin: 0 0.25em;
                    padding: 0.25em 0.65em;
                }
            
                pre {
                    -webkit-overflow-scrolling: touch;
                    font-family: "Courier New", monospace;
                    font-size: 0.9em;
                    margin: 0 0 2em 0;
                }
            
                    pre code {
                        display: block;
                        line-height: 1.75em;
                        padding: 1em 1.5em;
                        overflow-x: auto;
                    }
            
                hr {
                    border: 0;
                    border-bottom: solid 1px rgba(160, 160, 160, 0.3);
                    margin: 2em 0;
                }
            
                    hr.major {
                        margin: 3em 0;
                    }
            
                .align-left {
                    text-align: left;
                }
            
                .align-center {
                    text-align: center;
                }
            
                .align-right {
                    text-align: right;
                }

        #sidebar {
            margin-right: 3em;
            min-width: 22em;
            width: 22em;
        }
    
            #sidebar > * {
                border-top: solid 1px rgba(160, 160, 160, 0.3);
                margin: 3em 0 0 0;
                padding: 3em 0 0 0;
            }
    
            #sidebar > :first-child {
                border-top: 0;
                margin-top: 0;
                padding-top: 0;
            }
    
            @media screen and (max-width: 1280px) {
    
                #sidebar {
                    border-top: solid 1px rgba(160, 160, 160, 0.3);
                    margin: 3em 0 0 0;
                    min-width: 0;
                    padding: 3em 0 0 0;
                    width: 100%;
                    overflow-x: hidden;
                }
    
            }

            .blurb h2 {
                font-size: 0.8em;
                margin: 0 0 1.5em 0;
            }
        
            .blurb h3 {
                font-size: 0.7em;
            }
        
            .blurb p {
                font-size: 0.9em;
            }

            ul.actions {
                display: -moz-flex;
                display: -webkit-flex;
                display: -ms-flex;
                display: flex;
                cursor: default;
                list-style: none;
                margin-left: -1em;
                padding-left: 0;
            }
        
                ul.actions li {
                    padding: 0 0 0 1em;
                    vertical-align: middle;
                }
        
                ul.actions.special {
                    -moz-justify-content: center;
                    -webkit-justify-content: center;
                    -ms-justify-content: center;
                    justify-content: center;
                    width: 100%;
                    margin-left: 0;
                }
        
                    ul.actions.special li:first-child {
                        padding-left: 0;
                    }
        
                ul.actions.stacked {
                    -moz-flex-direction: column;
                    -webkit-flex-direction: column;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    margin-left: 0;
                }
        
                    ul.actions.stacked li {
                        padding: 1.3em 0 0 0;
                    }
        
                        ul.actions.stacked li:first-child {
                            padding-top: 0;
                        }
        
                ul.actions.fit {
                    width: calc(100% + 1em);
                }
        
                    ul.actions.fit li {
                        -moz-flex-grow: 1;
                        -webkit-flex-grow: 1;
                        -ms-flex-grow: 1;
                        flex-grow: 1;
                        -moz-flex-shrink: 1;
                        -webkit-flex-shrink: 1;
                        -ms-flex-shrink: 1;
                        flex-shrink: 1;
                        width: 100%;
                    }
        
                        ul.actions.fit li > * {
                            width: 100%;
                        }
        
                    ul.actions.fit.stacked {
                        width: 100%;
                    }
        
                @media screen and (max-width: 480px) {
        
                    ul.actions:not(.fixed) {
                        -moz-flex-direction: column;
                        -webkit-flex-direction: column;
                        -ms-flex-direction: column;
                        flex-direction: column;
                        margin-left: 0;
                        width: 100% !important;
                    }
        
                        ul.actions:not(.fixed) li {
                            -moz-flex-grow: 1;
                            -webkit-flex-grow: 1;
                            -ms-flex-grow: 1;
                            flex-grow: 1;
                            -moz-flex-shrink: 1;
                            -webkit-flex-shrink: 1;
                            -ms-flex-shrink: 1;
                            flex-shrink: 1;
                            padding: 1em 0 0 0;
                            text-align: center;
                            width: 100%;
                        }
        
                            ul.actions:not(.fixed) li > * {
                                width: 100%;
                            }
        
                            ul.actions:not(.fixed) li:first-child {
                                padding-top: 0;
                            }
        
                            ul.actions:not(.fixed) li input[type="submit"],
                            ul.actions:not(.fixed) li input[type="reset"],
                            ul.actions:not(.fixed) li input[type="button"],
                            ul.actions:not(.fixed) li button,
                            ul.actions:not(.fixed) li .button {
                                width: 100%;
                            }
        
                                ul.actions:not(.fixed) li input[type="submit"].icon:before,
                                ul.actions:not(.fixed) li input[type="reset"].icon:before,
                                ul.actions:not(.fixed) li input[type="button"].icon:before,
                                ul.actions:not(.fixed) li button.icon:before,
                                ul.actions:not(.fixed) li .button.icon:before {
                                    margin-left: -0.5em;
                                }
        
                }

            #intro .logo {
                border-bottom: 0;
                display: inline-block;
                margin: 0 0 1em 0;
                overflow: hidden;
                position: relative;
                width: 4em;
            }
        
                #intro .logo:before {
                    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' preserveAspectRatio='none' zoomAndPan='disable'%3E%3Cpolygon points='0,0 100,0 100,25 50,0 0,25' style='fill:%23f4f4f4' /%3E%3Cpolygon points='0,100 100,100 100,75 50,100 0,75' style='fill:%23f4f4f4' /%3E%3C/svg%3E");
                    background-position: top left;
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    content: '';
                    display: block;
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0;
                    width: 100%;
                }
        
                #intro .logo img {
                    display: block;
                    margin-left: -0.25em;
                    width: 4.5em;
                }
        
            #intro header h2 {
                font-size: 2em;
                font-weight: 900;
            }
        
            #intro header p {
                font-size: 0.8em;
            }
        
            @media screen and (max-width: 1280px) {
        
                #intro {
                    margin: 0 0 3em 0;
                    text-align: center;
                }
        
                    #intro header h2 {
                        font-size: 2em;
                    }
        
                    #intro header p {
                        font-size: 0.7em;
                    }
        
            }
        
            @media screen and (max-width: 736px) {
        
                #intro {
                    margin: 0 0 1.5em 0;
                    padding: 1.25em 0;
                }
        
                    #intro > :last-child {
                        margin-bottom: 0;
                    }
        
                    #intro .logo {
                        margin: 0 0 0.5em 0;
                    }
        
                    #intro header h2 {
                        font-size: 1.25em;
                    }
        
                    #intro header > :last-child {
                        margin-bottom: 0;
                    }
        
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


            input[type="submit"],
	input[type="reset"],
	input[type="button"],
	button,
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

		input[type="submit"]:hover,
		input[type="reset"]:hover,
		input[type="button"]:hover,
		button:hover,
		.button:hover {
			box-shadow: inset 0 0 0 1px #2ebaae;
			color: #2ebaae !important;
		}

			input[type="submit"]:hover:active,
			input[type="reset"]:hover:active,
			input[type="button"]:hover:active,
			button:hover:active,
			.button:hover:active {
				background-color: rgba(46, 186, 174, 0.05);
			}

		input[type="submit"]:before, input[type="submit"]:after,
		input[type="reset"]:before,
		input[type="reset"]:after,
		input[type="button"]:before,
		input[type="button"]:after,
		button:before,
		button:after,
		.button:before,
		.button:after {
			color: #aaaaaa;
			position: relative;
		}

		input[type="submit"]:before,
		input[type="reset"]:before,
		input[type="button"]:before,
		button:before,
		.button:before {
			left: -1em;
			padding: 0 0 0 0.75em;
		}

		input[type="submit"]:after,
		input[type="reset"]:after,
		input[type="button"]:after,
		button:after,
		.button:after {
			left: 1em;
			padding: 0 0.75em 0 0;
		}

		input[type="submit"].fit,
		input[type="reset"].fit,
		input[type="button"].fit,
		button.fit,
		.button.fit {
			width: 100%;
		}

		input[type="submit"].large,
		input[type="reset"].large,
		input[type="button"].large,
		button.large,
		.button.large {
			font-size: 0.7em;
			padding: 0 3em;
		}

		input[type="submit"].small,
		input[type="reset"].small,
		input[type="button"].small,
		button.small,
		.button.small {
			font-size: 0.5em;
		}

		input[type="submit"].disabled, input[type="submit"]:disabled,
		input[type="reset"].disabled,
		input[type="reset"]:disabled,
		input[type="button"].disabled,
		input[type="button"]:disabled,
		button.disabled,
		button:disabled,
		.button.disabled,
		.button:disabled {
			pointer-events: none;
			color: rgba(160, 160, 160, 0.3) !important;
		}

			input[type="submit"].disabled:before, input[type="submit"]:disabled:before,
			input[type="reset"].disabled:before,
			input[type="reset"]:disabled:before,
			input[type="button"].disabled:before,
			input[type="button"]:disabled:before,
			button.disabled:before,
			button:disabled:before,
			.button.disabled:before,
			.button:disabled:before {
				color: rgba(160, 160, 160, 0.3) !important;
			}
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    
    <section id="sidebar">

        <section id="intro">
            <a href="#" class="logo"><img src="./static/img/logo.jpg" alt="" /></a>
            <header>
                <bfi-header><h2>Future Imperfect</h2></bfi-header>
                <p>Another fine responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
            </header>
        </section>

        <section class="blurb">
            <bfi-header><h2>About</h2></bfi-header>
            <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>
            <ul class="actions">
                <li><a href="#" class="button">Learn More</a></li>
            </ul>
        </section>

        <bfi-icons></bfi-icons>
        
    </section>
    `;

  }

}

window.customElements.define('bfi-sidebar', BfiSidebar)