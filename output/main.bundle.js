/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$3=Symbol(),n$3=new Map;class s$3{constructor(t,n){if(this._$cssResult$=!0,n!==e$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$3.get(this.cssText);return t$2&&void 0===e&&(n$3.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$3=t=>new s$3("string"==typeof t?t:t+"",e$3),r$2=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$3(o,e$3)},i$2=(e,n)=>{t$2?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$2=window.trustedTypes,r$1=e$2?e$2.emptyScript:"",h$1=window.reactiveElementPolyfillSupport,o$2={toAttribute(t,i){switch(i){case Boolean:t=t?r$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$2=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:o$2,reflect:!1,hasChanged:n$2};class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$2(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$2){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$2.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$2.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$2)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$1||h$1({ReactiveElement:a$1}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.3.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;const i$1=globalThis.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$1=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+e$1,n$1=`<${o$1}>`,l$1=document,h=(t="")=>l$1.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$1.createTreeWalker(l$1,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$1:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$1+y):s+e$1+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$1?s$1.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$1)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$1),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$1),s=t.length-1;if(s>0){l.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o$1)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$1,t+1));)c.push({type:7,index:r}),t+=e$1.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t));}$(t){this._$AH!==w&&r(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$1.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.M(h()),this.M(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i$1?i$1.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t$1=globalThis.litHtmlVersions)&&void 0!==t$1?t$1:globalThis.litHtmlVersions=[]).push("2.2.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.2.0");

class BlueBackground extends s {

  static get styles() {
    return r$2`
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
    return $`
      <slot name="content"></slot>
    `;

  }

}

window.customElements.define('blue-background', BlueBackground);

class RedBackground extends s {

  static get styles() {
    return r$2`
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
    return $`
      <slot name="content"></slot>
    `;

  }

}

window.customElements.define('red-background', RedBackground);

class BfiNavigation extends s {

  static get styles() {
    return r$2`
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
    return $`
        <header id="header">
            <h1>
                <a href="/">Brian Ferry's Website</a>
            </h1>
        </header>
    `;

  }

}

window.customElements.define('bfi-navigation', BfiNavigation);

class BfiSidebar extends s {

  static get styles() {
    return r$2`

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
    return $`
    
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

window.customElements.define('bfi-sidebar', BfiSidebar);

class BfiIcons extends s {

  static get styles() {
    return r$2`
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
    return $`
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

window.customElements.define('bfi-icons', BfiIcons);

class BfiPost extends s {

  static get styles() {
    return r$2`
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
    return $`
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
            $`
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

window.customElements.define('bfi-post', BfiPost);

class BfiButton extends s {

  static get styles() {
    return r$2`

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
    return $`
        <a href="${this.url}" class="button large">${this.text}</a>
    `;

  }

}

window.customElements.define('bfi-button', BfiButton);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6};class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends i{constructor(i){if(super(i),this.it=w,i.type!==t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===w||null==r)return this.ft=void 0,this.it=r;if(r===b)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this.ft;this.it=r;const s=[r];return s.raw=s,this.ft={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;

class BfiHeader extends s {
  static styles = r$2`
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
    return $`
      <slot>
      </slot>
    `
  }
}

window.customElements.define('bfi-header', BfiHeader);
