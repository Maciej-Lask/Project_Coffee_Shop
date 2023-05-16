import { settings, select, classNames } from './settings.js';

import HomePage from './components/Home.js';
import Product from './components/Product.js';
import ContactPage from './components/Contact.js';
const app = {
  initData: function () {
    const thisApp = this;
    const url = settings.db.url + '/' + settings.db.products;
    thisApp.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;
        
        thisApp.initProductsPage();
      });
  },
  initContactPage: function () {
    const thisApp = this;
    const contactElem = document.querySelector(select.containerOf.contactPage);

    thisApp.contactPage = new ContactPage(contactElem);
  },
  initProductsPage: function () {
    const thisApp = this;
    const productListContainer = document.querySelector(
      select.containerOf.productList
    );
    const homePageContainer = document.querySelector(
      select.containerOf.homePage
    );

    for (let productData in thisApp.data.products) {
      const product = new Product(
        thisApp.data.products[productData].id,
        thisApp.data.products[productData]
      );

      productListContainer.appendChild(product.element);
      const secondToLastChild =
        homePageContainer.children[homePageContainer.children.length - 1];
      homePageContainer.insertBefore(
        product.element.cloneNode(true),
        secondToLastChild
      );
    }
  },
  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;

    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();
        const id = clickedElement.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;
    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
      for (let link of thisApp.navLinks) {
        link.classList.toggle(
          classNames.nav.active,
          link.getAttribute('href') == '#' + pageId
        );
      }
    }
  },

  initHomePage: function () {
    const thisApp = this;
    const homePageElem = document.querySelector(select.containerOf.homePage);
    thisApp.homePage = new HomePage(homePageElem);
  },
  init: function () {
    const thisApp = this;
    thisApp.initPages();
    thisApp.initData();
    thisApp.initContactPage();
    thisApp.initHomePage();
    thisApp.initProductsPage();
  },
};

app.init();
