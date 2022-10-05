import * as components from './components/index.js';
import data from "./components/data.js";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); 
  }

  connectedCallback() {
    this.render();
  }

  render() {
    data.forEach((element) => {
      this.shadowRoot.innerHTML +=`
      <my-profile 
      username="${element.username}" 
      location="${element.location}"
      age="${element.age}" 
      description="${element.description}" 
      photos="${element.photos}">
      </my-profile>
      `;
    });
    this.shadowRoot.innerHTML += `<my-likes></my-likes>`;
  }
}

customElements.define('app-container', AppContainer);