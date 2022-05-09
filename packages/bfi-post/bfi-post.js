
import {LitElement, html, css} from 'lit';
class BfiPost extends LitElement {

  static get styles() {
    return css`
      article, header, div, a, p,
      time, span, footer, ul, li {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }

      article, footer, header {
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

    .post {
		color: #646464;
		font-family: "Source Sans Pro", Helvetica, sans-serif;
		font-size: 14pt;
		font-weight: 400;
		line-height: 1.75;
	}

		@media screen and (max-width: 1680px) {

			.post {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 1280px) {

			.post {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 980px) {

			.post {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 736px) {

			.post {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 480px) {

			.post {
				font-size: 12pt;
			}

		}

      article {
          line-height: 1;
          -webkit-text-size-adjust: none;
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

    p {
		margin: 0 0 2em 0;
	}

	

    .author {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-direction: row;
		-webkit-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-moz-align-items: center;
		-webkit-align-items: center;
		-ms-align-items: center;
		align-items: center;
		-moz-justify-content: -moz-flex-end;
		-webkit-justify-content: -webkit-flex-end;
		-ms-justify-content: -ms-flex-end;
		justify-content: flex-end;
		border-bottom: 0;
		font-family: "Raleway", Helvetica, sans-serif;
		font-size: 0.6em;
		font-weight: 400;
		letter-spacing: 0.25em;
		text-transform: uppercase;
		white-space: nowrap;
	}

		.author .name {
			-moz-transition: border-bottom-color 0.2s ease;
			-webkit-transition: border-bottom-color 0.2s ease;
			-ms-transition: border-bottom-color 0.2s ease;
			transition: border-bottom-color 0.2s ease;
			border-bottom: dotted 1px rgba(160, 160, 160, 0.65);
			display: block;
			margin: 0 1.5em 0 0;
		}

		.author img {
			border-radius: 100%;
			display: block;
			width: 4em;
		}

		.author:hover .name {
			border-bottom-color: transparent;
		}

        

        .image {
            border: 0;
            display: inline-block;
            position: relative;
        }
    
        .image img {
            display: block;
        }

        .image.featured {
            display: block;
            margin: 0 0 3em 0;
            width: 100%;
        }

        .image.featured img {
            width: 100%;
        }

        @media screen and (max-width: 736px) {

            .image.featured {
                margin: 0 0 1.5em 0;
            }

        }

        li {
			padding-left: 0.25em;
		}

        ul {
            list-style: disc;
            margin: 0 0 2em 0;
            padding-left: 1em;
        }
    
        ul li {
            padding-left: 0.5em;
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
            ul.actions:not(.fixed) li ::slotted(*) {
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

        .post {
            padding: 3em 3em 1em 3em ;
            background: #ffffff;
            border: solid 1px rgba(160, 160, 160, 0.3);
            margin: 0 0 3em 0;
            position: relative;
        }
    
            .post > header {
                display: -moz-flex;
                display: -webkit-flex;
                display: -ms-flex;
                display: flex;
                border-bottom: solid 1px rgba(160, 160, 160, 0.3);
                left: -3em;
                margin: -3em 0 3em 0;
                position: relative;
                width: calc(100% + 6em);
            }
    
                .post > header .title {
                    -moz-flex-grow: 1;
                    -webkit-flex-grow: 1;
                    -ms-flex-grow: 1;
                    flex-grow: 1;
                    -ms-flex: 1;
                    padding: 3.75em 3em 3.3em 3em;
                }
    
                    .post > header .title h2 {
                        font-weight: 900;
                        font-size: 1.5em;
                    }
    
                    .post > header .title > :last-child {
                        margin-bottom: 0;
                    }
    
                .post > header .meta {
                    padding: 3.75em 3em 1.75em 3em ;
                    border-left: solid 1px rgba(160, 160, 160, 0.3);
                    min-width: 17em;
                    text-align: right;
                    width: 17em;
                }
    
                    .post > header .meta > * {
                        margin: 0 0 1em 0;
                    }
    
                    .post > header .meta > :last-child {
                        margin-bottom: 0;
                    }
    
                    .post > header .meta .published {
                        color: #3c3b3b;
                        display: block;
                        font-family: "Raleway", Helvetica, sans-serif;
                        font-size: 0.7em;
                        font-weight: 800;
                        letter-spacing: 0.25em;
                        margin-top: 0.5em;
                        text-transform: uppercase;
                        white-space: nowrap;
                    }
    
            .post > a.image.featured {
                overflow: hidden;
            }
    
                .post > a.image.featured img {
                    -moz-transition: -moz-transform 0.2s ease-out;
                    -webkit-transition: -webkit-transform 0.2s ease-out;
                    -ms-transition: -ms-transform 0.2s ease-out;
                    transition: transform 0.2s ease-out;
                }
    
                .post > a.image.featured:hover img {
                    -moz-transform: scale(1.05);
                    -webkit-transform: scale(1.05);
                    -ms-transform: scale(1.05);
                    transform: scale(1.05);
                }
    
            .post > footer {
                display: -moz-flex;
                display: -webkit-flex;
                display: -ms-flex;
                display: flex;
                -moz-align-items: center;
                -webkit-align-items: center;
                -ms-align-items: center;
                align-items: center;
            }
    
                .post > footer .actions {
                    -moz-flex-grow: 1;
                    -webkit-flex-grow: 1;
                    -ms-flex-grow: 1;
                    flex-grow: 1;
                }
    
                .post > footer .stats {
                    cursor: default;
                    list-style: none;
                    padding: 0;
                }
    
                    .post > footer .stats li {
                        border-left: solid 1px rgba(160, 160, 160, 0.3);
                        display: inline-block;
                        font-family: "Raleway", Helvetica, sans-serif;
                        font-size: 0.6em;
                        font-weight: 400;
                        letter-spacing: 0.25em;
                        line-height: 1;
                        margin: 0 0 0 2em;
                        padding: 0 0 0 2em;
                        text-transform: uppercase;
                    }
    
                        .post > footer .stats li:first-child {
                            border-left: 0;
                            margin-left: 0;
                            padding-left: 0;
                        }
    
                        .post > footer .stats li .icon {
                            border-bottom: 0;
                        }
    
                            .post > footer .stats li .icon:before {
                                color: rgba(160, 160, 160, 0.3);
                                margin-right: 0.75em;
                            }
    
            @media screen and (max-width: 980px) {
    
                .post {
                    border-left: 0;
                    border-right: 0;
                    left: -3em;
                    width: calc(100% + (3em * 2));
                }
    
                    .post > header {
                        -moz-flex-direction: column;
                        -webkit-flex-direction: column;
                        -ms-flex-direction: column;
                        flex-direction: column;
                        padding: 3.75em 3em 1.25em 3em ;
                        border-left: 0;
                    }
    
                        .post > header .title {
                            -ms-flex: 0 1 auto;
                            margin: 0 0 2em 0;
                            padding: 0;
                            text-align: center;
                        }
    
                        .post > header .meta {
                            -moz-align-items: center;
                            -webkit-align-items: center;
                            -ms-align-items: center;
                            align-items: center;
                            display: -moz-flex;
                            display: -webkit-flex;
                            display: -ms-flex;
                            display: flex;
                            -moz-justify-content: center;
                            -webkit-justify-content: center;
                            -ms-justify-content: center;
                            justify-content: center;
                            border-left: 0;
                            margin: 0 0 2em 0;
                            padding-top: 0;
                            padding: 0;
                            text-align: left;
                            width: 100%;
                        }
    
                            .post > header .meta > * {
                                border-left: solid 1px rgba(160, 160, 160, 0.3);
                                margin-left: 2em;
                                padding-left: 2em;
                            }
    
                            .post > header .meta > :first-child {
                                border-left: 0;
                                margin-left: 0;
                                padding-left: 0;
                            }
    
                            .post > header .meta .published {
                                margin-bottom: 0;
                                margin-top: 0;
                            }
    
                            .post > header .meta .author {
                                -moz-flex-direction: row-reverse;
                                -webkit-flex-direction: row-reverse;
                                -ms-flex-direction: row-reverse;
                                flex-direction: row-reverse;
                                margin-bottom: 0;
                            }
    
                                .post > header .meta .author .name {
                                    margin: 0 0 0 1.5em;
                                }
    
                                .post > header .meta .author img {
                                    width: 3.5em;
                                }
    
            }
    
            @media screen and (max-width: 736px) {
    
                .post {
                    padding: 1.5em 1.5em 0.1em 1.5em ;
                    left: -1.5em;
                    margin: 0 0 2em 0;
                    width: calc(100% + (1.5em * 2));
                }
    
                    .post > header {
                        padding: 3em 1.5em 0.5em 1.5em ;
                        left: -1.5em;
                        margin: -1.5em 0 1.5em 0;
                        width: calc(100% + 3em);
                    }
    
                        .post > header .title h2 {
                            font-size: 1.1em;
                        }
    
            }
    
            @media screen and (max-width: 480px) {
    
                .post > header .meta {
                    -moz-align-items: center;
                    -webkit-align-items: center;
                    -ms-align-items: center;
                    align-items: center;
                    -moz-flex-direction: column;
                    -webkit-flex-direction: column;
                    -ms-flex-direction: column;
                    flex-direction: column;
                }
    
                .post > header .meta > * {
                    border-left: 0;
                    margin: 1em 0 0 0;
                    padding-left: 0;
                }

                .post > header .meta .author .name {
                    display: none;
                }
    
                .post > .image.featured {
                    margin-left: -1.5em;
                    margin-top: calc(-1.5em - 1px);
                    width: calc(100% + 3em);
                }
    
                .post > footer {
                    -moz-align-items: -moz-stretch;
                    -webkit-align-items: -webkit-stretch;
                    -ms-align-items: -ms-stretch;
                    align-items: stretch;
                    -moz-flex-direction: column-reverse;
                    -webkit-flex-direction: column-reverse;
                    -ms-flex-direction: column-reverse;
                    flex-direction: column-reverse;
                }
    
                .post > footer .stats {
                    text-align: center;
                }

                .post > footer .stats li {
                    margin: 0 0 0 1.25em;
                    padding: 0 0 0 1.25em;
                }
    
            }

    `;
  }

  static properties = {
    title: { type: String, reflect: true },
    subtitle: { type: String, reflect: true },
    publishDate: { type: String, reflect: true},
    blurb: { type: String, reflect: true },
    url: { type: String, reflect: true },
    singlePost: { type: Boolean, reflect: true, default: false }
  }


  constructor() {
    super();
  }

  render() {
    return html`
    <article class="post">
        <header>
            <div class="title">
                <bfi-header><h2><a href="single.html">${this.title}</a></h2></bfi-header>
                <p>${this.subtitle}</p>
            </div>
            <div class="meta">
                <time class="published" datetime="2015-11-01">${this.publishDate}</time>
            </div>
        </header>
        <p>
            <slot name="content"></slot>
        </p>
        ${!this.singlePost ? 
            html`
                <footer>
                    <ul class="actions">
                        <li><bfi-button url="${this.url}" text="Continue Reading"></bfi-button></li>
                    </ul>
                </footer>
            ` : 
            null}
        
    </article>
    `;

  }

}

window.customElements.define('bfi-post', BfiPost)