(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{223:function(t,e,n){"use strict";n.r(e),n.d(e,"Comp",(function(){return a})),n.d(e,"code",(function(){return c}));var s=n(5),i=n(7);const o=["","DownLeft","DownRight","UpLeft","UpRight"];class a extends s.a{static get properties(){return{a:Boolean,choice:Object}}static get styles(){return s.b`.absolute { position: absolute }`}constructor(){super(),this.choice=o[0]}select(t){this.choice=t.target.value,this.a=!this.a}render(){return s.c`
    <!-- get latest animate.css v3.5.1 -->
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1"
    rel="stylesheet" type="text/css">
    click to transition
    <select @change=${this.select}>${Object.values(o).map(t=>s.c`<option value=${t}>rotate[In/Out]${t}</option>`)}</select>
    <button @click=${()=>this.a=!this.a}>animate</button>
    <center style="margin: 20px; font-size: 30px; position: relative">
    ${Object(i.transition)(this.a?"LIT-TRANSITION":"ANIMATE.CSS",{mode:"both",enter:["animated","rotateIn"+this.choice],leave:{active:["animated","rotateOut"+this.choice,"absolute"],lock:!0}})}</center>`}}const c="\nimport { LitElement, html, css } from 'lit-element';\nimport { transition } from 'lit-transition';\n\n// all rotating entrances available in animate.css\n// will be prefixed with 'rotateIn' or 'rotateOut'\nconst classes = ['','DownLeft','DownRight','UpLeft','UpRight'];\n\nexport class Comp extends LitElement {\n  static get properties() {\n    return { \n      a: Boolean, // to toggle content / trigger anim\n      choice: Object // for transition mode\n    }\n  }\n  static get styles() {\n    return css`.absolute { position: absolute }`;\n  }\n  \n  // initialize component\n  constructor() {\n    super();\n    this.choice = classes[0];\n  }\n\n  // sets mode and swaps transitioned content\n  select(e) {\n    this.choice = e.target.value;\n    this.a = !this.a;\n  }\n\n  render() {\n    // animates with different modes\n    return html`\n    \x3c!-- get latest animate.css v3.5.1 --\x3e\n    <link href=\"https://cdn.jsdelivr.net/npm/animate.css@3.5.1\"\n    rel=\"stylesheet\" type=\"text/css\">\n    click to transition\n    <select @change=${this.select}>${\n      Object.values(classes).map(c =>\n        html`<option value=${c}>rotate[In/Out]${c}</option>`)\n    }</select>\n    <button @click=${() => this.a = !this.a}>animate</button>\n    <center style=\"margin: 20px; font-size: 30px; position: relative\">\n    ${transition(\n      this.a ? 'LIT-TRANSITION' : 'ANIMATE.CSS', {\n        mode: 'both',\n        enter: ['animated', 'rotateIn'+this.choice],\n        leave: {\n          active: ['animated', 'rotateOut'+this.choice, 'absolute'],\n          lock: true\n        }\n      }\n    )}</center>`;\n  } \n}\n"}}]);
//# sourceMappingURL=13.js.map