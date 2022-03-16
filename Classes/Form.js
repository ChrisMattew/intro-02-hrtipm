export default class Form {
  constructor(config, products) {
    this.config = config;
    this.products = products;
  }

  buildSection() {}

  createSection() {
    let section = document.createElement('div');
    section.classList.add('section');
    section.appendChild(this.createDescriptionBox());
    return section;
  }

  createDescriptionBox() {
    let descriptionBox = document.createElement('div');

    descriptionBox.classList.add('description');
    descriptionBox.appendChild(this.createTitle());
    descriptionBox.appendChild(this.createDescription());

    return descriptionBox;
  }
  createTitle() {
    let title = document.createElement('h1');
    title.innerText = this.config.title;
    return title;
  }
  createDescription() {
    let description = document.createElement('p');
    description.innerText = this.config.description;
    return description;
  }
  createInputBox() {
    let inputBox = document.createElement('div');

    return inputBox;
  }
  createProductBox() {
    let productBox = document.createElement('div');

    return productBox;
  }
  appendToDOM() {
    document.querySelector('#form-wrapper').appendChild(this.createSection());
  }
}
