class dropDownMenu extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        var template = document
        .getElementById('dropDownTemplate')
        .content;
      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(template.cloneNode(true));
    }
}
// Define the new element
customElements.define('dropDownMenu', dropDownMenu);