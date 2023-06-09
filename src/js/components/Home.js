import { templates } from '../settings.js';

class HomePage {
  constructor(element) {
    const thisHome = this;
    thisHome.render(element);
  }
  render(element) {
    const thisHome = this;

    thisHome.dom = {};
    thisHome.dom.wrapper = element;

    const generatedHTML = templates.homePage();
    thisHome.dom.wrapper.innerHTML = generatedHTML;

  }
}

export default HomePage;
