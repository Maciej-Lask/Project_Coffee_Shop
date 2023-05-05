import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(id, data, isEven) {
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;
    thisProduct.isEven = isEven;
    console.log('thisProduct.isEven :>> ', thisProduct.isEven);
    thisProduct.render();
  }

  render() {
    const thisProduct = this;

    const generatedHTML = templates.productsPage(thisProduct.data);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    console.log('thisProduct.element :>> ', thisProduct.element);

    const textElement = thisProduct.element.querySelector(
      select.containerOf.text
    );
    const imageElement = thisProduct.element.querySelector(
      select.containerOf.image
    );
    const productContainer = document.querySelector(
      select.containerOf.productPage
    );

    if (thisProduct.isEven == false ) {
      console.log('swap product element');
      thisProduct.element.insertBefore(textElement, imageElement);
    }
    productContainer.appendChild(thisProduct.element);
  }
}

export default Product;
