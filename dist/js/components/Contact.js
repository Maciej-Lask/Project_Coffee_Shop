import { templates} from '../settings.js';

class ContactPage {
  constructor(element) {
    const thisContact = this;
    thisContact.render(element);
  }

  render(element) {
    const thisContact = this;
    
    thisContact.dom = {};
    thisContact.dom.wrapper = element;

    const generatedHTML = templates.contactPage();

    thisContact.dom.wrapper.innerHTML = generatedHTML;

  }




}
export default ContactPage;
