export const select = {
  templateOf: {
    homePage: '#template-home-page',
    productsPage: '#template-productsPage',
    contactPage: '#template-contactPage',
  },
  containerOf: {
    homePage: '.home-page-wrapper',
    pages: '#pages',
    contactPage: '.contact-wrapper',
    productPage: '.product-page-wrapper',
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
  productsPage: Handlebars.compile(
    document.querySelector(select.templateOf.productsPage).innerHTML
  ),
  contactPage: Handlebars.compile(
    document.querySelector(select.templateOf.contactPage).innerHTML
  ),
};
