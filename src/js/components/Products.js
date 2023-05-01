import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(id,data) {
    const thisProduct = this;
    thisProduct.id = id;
    thisProduct.data = data;
    thisProduct.render();
  }
  render() {
    const thisProduct = this;

    console.log('thisProduct.id :>> ', thisProduct.id);
    console.log('thisProduct.data :>> ', thisProduct.data);
    const generatedHTML = templates.productsPage(thisProduct.data);
    console.log('generatedHTML :>> ', generatedHTML);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    console.log('thisProduct.element :>> ', thisProduct.element);
    const productContainer = document.querySelector(
      select.containerOf.productPage
    );
    productContainer.appendChild(thisProduct.element);
    
  }
}

export default Product;
