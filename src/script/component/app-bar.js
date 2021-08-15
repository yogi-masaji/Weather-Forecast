

class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
           * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
           }
           :host {
               color: white;
           }
           h2 {
               padding: 50px 50px;
           }
       </style>
        <h2>Daily Weather</h2>`;
    }
}

customElements.define("app-bar", AppBar);