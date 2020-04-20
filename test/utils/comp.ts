import {LitElement} from 'lit-element';
/**
 * base class for simple test cases
 */
export class TestComponent extends LitElement {

  /**
   * get component in dom
   * @param detail 
   */
  dom(selector:string) {
    const elems = this.shadowRoot!.querySelectorAll(selector);
    if(elems.length > 1) {
      return Array.from(elems);
    } else if(elems.length === 1) {
      return elems[0];
    } else {
      return null;
    }
  }

  /**
   * call this in derived class to conclude test
   * @param detail result to resolve to
   */
  resolve(detail: any = undefined) {
    this.dispatchEvent(new CustomEvent('resolve', {
      detail,
      composed: true,
      bubbles: true
    }));
  }
}

/**
 * Mounts component and resolves once component
 * emits 'resolve' event
 * @param Comp component that will be registered and mounted
 */
export function compTest(Comp:CustomElementConstructor) {
  test('assert', () => new Promise((resolve) => {
    const name = 'test-'+(''+Math.random()).split('.').pop();
    customElements.define(name, Comp);
    const instance = document.createElement(name);
    document.body.appendChild(instance);
    instance.addEventListener('resolve', resolve, {once:true});
  }));
}