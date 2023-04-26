import { templates } from '../settings.js';

class productsPage {
  constructor(element) {
    const thisProductPage = this;
    thisProductPage.render(element);
  }
  render(element) {
    const thisProductPage = this;

    thisProductPage.dom = {};
    thisProductPage.dom.wrapper = element;

    const generatedHTML = templates.productsPage();
    thisProductPage.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default productsPage;
