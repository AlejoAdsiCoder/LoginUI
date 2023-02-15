import { LitElement, html, } from 'lit-element';
/* import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsTrainingLoginUi-styles.js'; */
import '@bbva-web-components/bbva-button-default/bbva-button-default';
import '@bbva-web-components/bbva-form-field/bbva-form-field';
import '@bbva-web-components/bbva-form-password/bbva-form-password';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-training-login-ui></cells-training-login-ui>
```

##styling-doc

@customElement cells-training-login-ui
*/
export class CellsTrainingLoginUi extends LitElement {
  static get is() {
    return 'cells-training-login-ui';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
      errorMessage: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
    this.errorMessage = '';
  }

  /* static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-training-login-ui-shared-styles')
    ];
  } */

  _handleInput(e) {
    let input = e.target.value;
    console.log(input)
    if(input.length === 0) {
      document.getElementById("btn").setAttribute("disabled", "");
    } else {
      this.errorMessage = "Longitud invalida en usuario"

    }

  }

  // Define a template
  render() {
    return html`
      <slot></slot>
      <p>Welcome to ${this.name}</p>
      <div class="case">
        <bbva-form-field @input="${this._handleInput}" required info-message="Ingresa tu Usuario" label="usuario" placeholder="usuario" error-message="${this.errorMessage}"></bbva-form-field>
      </div>
      <div class="case">
        <bbva-form-password label="Enter password"></bbva-form-password>
      </div>
      <div class="case">
        <bbva-button-default id="btn">Login</bbva-button-default>
      </div>
    `;
  }
}
