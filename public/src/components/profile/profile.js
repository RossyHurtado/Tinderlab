class MyProfile extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
   
  static get observedAttributes() {
    return ['photos','username', 'location', 'age', 'description'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/profile/style.css">

    <section>
    
    <div class="card"></div>
      <img src= ${this.photos} alt="" class="person">
  
    </div>

    <div class="icons">
      <img src="./image/fire.png" alt="" class="logo">
      <img src="./image/star.png" alt="" class="fav">
      <img src="./image/light.png" alt="" class="rayo">
      <img src="./image/heart1.png" alt="" class="cora">
      <img src="./image/pp.png" alt="" class="people">
      <img src="./image/chat.png" alt="" class="bubble">
      <img src="./image/back.png" alt="" class="rewind">
    </div>

    <div class="info">
        <h1>${this.username}, ${this.age}</h1>
        <h1> ${this.location}</h1>
        <h1> ${this.description}</h1>
        
    </div>

        </section>

        `;
  }
}

customElements.define('my-profile', MyProfile);
export default MyProfile; 
