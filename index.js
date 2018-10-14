const template = document.createElement('template');

template.innerHTML = `
  <style>
  :host {
    /* Style the host element. */
  }
  </style>
  <div>
    <!-- Customise shadow DOM html. -->
  </div>
`;

window.customElements.define('my-web-component', class extends HTMLElement {
  static get observedAttributes() {
    return ['my-attribute']; // Add attributes to observe changes through attributeChangedCallback
  }

  get myAttribute() {
    return this.getAttribute('my-attribute');
  }

  set settableAttribute(name) {
    // Do something useful when settableAttribute is set. Client use example:
    //
    //   document.querySelector('my-web-component').settableAttribute = [1, 2, 3];
  }

  constructor() {
    super();

    // Attach a shadow root to the element.
    this.root = this.attachShadow({mode: 'open'});
    this.root.appendChild(template.content.cloneNode(true));

    // Dispatch custom event in response to an internal event or attribute change:
    //
    //   this.dispatchEvent(new CustomEvent('<event-name>', { detail: <custom-detail>, composed: true }))
  }

  connectedCallback() {
    // Invoked each time the custom element is appended into a document-connected element. This will happen each time
    // the node is moved, and may happen before the element's contents have been fully parsed.
  }

  disconnectedCallback() {
    // Invoked each time the custom element is disconnected from the document's DOM.
  }

  adoptedCallback() {
    // Invoked each time the custom element is moved to a new document.
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    // Invoked each time one of the custom element's attributes is added, removed, or changed. Which attributes to
    // notice change for is specified in a static get observedAttributes method.
  }
});
