class MyLikes extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }
   
    static get observedAttributes() {
      return ["count"];
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {
      console.log("changed");
      this[propName] = newValue;
      this.mount();

    }
  
    connectedCallback() {
      console.log("mounted");
      this.mount();
    }
  
    disconnectedCallback() {
      console.log("unmounted");
      this.removeEventListener();
    }
  
    mount() {
      this.render();
      this.addEventListener();
    }
  
    render() {
      console.log("render");
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./src/components/likes/style.css">
          <section>
            <div class="like">
             <button class="megusta">___like <3___${this.count || 0}</button>
            </div>

          </section>
      `;
    }
  
    removeEventListener() {
      this.shadowRoot.querySelector("button").removeEventListener("click", this.onButtonClicked);
    }

    addEventListener(){
      this.shadowRoot.querySelector("button").addEventListener("click",this.onButtonClicked);
    }
  
    onButtonClicked() {
      console.log("clicked");
      const currentValue = Number(this.getAttribute("count")) || 0;
      this.setAttribute("count", currentValue + 1);
    }
  }
  
  customElements.define("my-likes", MyLikes);
  export default MyLikes;
  