import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(id, data, isEven) {
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;
    thisProduct.isEven = isEven;
    thisProduct.render();
  }

  render() {
    const thisProduct = this;

    const generatedHTML = templates.productElement(thisProduct.data);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);

    // const textElement = thisProduct.element.querySelector(
    //   select.containerOf.text
    // );
    // const imageElement = thisProduct.element.querySelector(
    //   select.containerOf.image
    // );
    const productContainer = document.querySelector(
      select.containerOf.productList
    );
    const productContainerHome = document.querySelector(
      select.containerOf.productListHome
    );

    // if (thisProduct.isEven == false) {
    //   thisProduct.element.insertBefore(textElement, imageElement);
    // }
    // if (window.matchMedia('(min-width: 768px)').matches) {
    //   if (thisProduct.isEven == false) {
    //     thisProduct.element.insertBefore(textElement, imageElement);
    //   }
    // }
    productContainerHome.appendChild(thisProduct.element.cloneNode(true));
    productContainer.appendChild(thisProduct.element.cloneNode(true));
  }
}

export default Product;
