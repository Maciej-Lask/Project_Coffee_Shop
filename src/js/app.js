import { settings, select, classNames } from './settings.js';

import HomePage from './components/Home.js';
import Product from './components/Products.js';
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
        console.log(parsedResponse);
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
    //const productsElem = document.querySelector(select.containerOf.productPage);
    //thisApp.productPage = new ProductsPage(productsElem);

    for (let productData in thisApp.data.products) {
      new Product(
        thisApp.data.products[productData].id,
        thisApp.data.products[productData]
      );
    }
  },
  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;

    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    console.log('thisApp.navLinks :>> ', thisApp.navLinks);
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
        // get page id from href attribute of clicked element

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);
        //change URL hash
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;
    //add class 'active' to matching page and remove class 'active' from other pages
    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
      //add class 'active' to matching link and remove class 'active' from other links
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

    // Select all links at home section using querySelectorAll
    thisApp.links = document.querySelectorAll(select.home.panelLinks);
    console.log('thisApp.links :>> ', thisApp.links);
    for (let link of thisApp.links) {
      const linkContainer = link.closest('.link');

      if (linkContainer) {
        linkContainer.addEventListener('click', function (event) {
          event.preventDefault();

          const href = link.getAttribute('href');
          if (href.startsWith('#')) {
            const id = href.substring(1);
            thisApp.activatePage(id);
            window.location.hash = '#/' + id;
          } else {
            window.location.href = href;
          }
        });
      }
    }
  },
  init: function () {
    const thisApp = this;
    thisApp.initPages();
    thisApp.initData();
    thisApp.initHomePage();
    thisApp.initProductsPage();
    thisApp.initContactPage();
  },
};

app.init();
