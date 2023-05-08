import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(id, data, isEven) {
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;
    thisProduct.isEven = isEven;
    //console.log('thisProduct.isEven :>> ', thisProduct.isEven);
    thisProduct.render();
  }

  render() {
    const thisProduct = this;

    const generatedHTML = templates.productPage(thisProduct.data);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    //console.log('thisProduct.element :>> ', thisProduct.element);

    const textElement = thisProduct.element.querySelector(
      select.containerOf.text
    );
    const imageElement = thisProduct.element.querySelector(
      select.containerOf.image
    );
    const productContainer = document.querySelector(
      select.containerOf.productPage
    );
    console.log('productContainer :>> ', productContainer);
    const productContainerHome = document.querySelector(
      select.containerOf.productPageHome
    );
    console.log('productContainerHome :>> ', productContainerHome);

    if (thisProduct.isEven == false) {
      thisProduct.element.insertBefore(textElement, imageElement);
    }
    // if (window.matchMedia('(min-width: 768px)').matches) {
    //   if (thisProduct.isEven == false) {
    //     thisProduct.element.insertBefore(textElement, imageElement);
    //   }
    // }

    // productContainerHome.appendChild(thisProduct.element);
    // productContainer.appendChild(thisProduct.element);
    
    // Append a clone of the element to each container
    productContainerHome.appendChild(thisProduct.element.cloneNode(true));
    productContainer.appendChild(thisProduct.element.cloneNode(true));
  }
}

export default Product;
