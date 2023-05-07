export const select = {
  templateOf: {
    homePage: '#template-home-page',
    product: '#template-product',
    contactPage: '#template-contactPage',
  },
  containerOf: {
    homePage: '.home-page-wrapper',
    pages: '#pages',
    contactPage: '.contact-wrapper',
    productPage: '#product-list',
    productPageHome: '#product-list-home',
    product: '.product',
    text: '.col-text',
    image:'.col-image',
  },

  home: {
    panelLinks: 'a.link',
  },
  nav: {
    links: '.main-nav a',
  },
};

export const classNames = {


  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};

export const settings = {
  
  db: {
    url:'//' + window.location.hostname +(window.location.hostname == 'localhost' ? ':3131' : ''),
    
    products: 'products',
    product: 'product',

  },

};

export const templates = {
  homePage: Handlebars.compile(
    document.querySelector(select.templateOf.homePage).innerHTML
  ),
  productPage: Handlebars.compile(
    document.querySelector(select.templateOf.product).innerHTML
  ),
  contactPage: Handlebars.compile(
    document.querySelector(select.templateOf.contactPage).innerHTML
  ),
};
