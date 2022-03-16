export default class Section {
  constructor(config, products) {
    this.config = config;
    this.products = products;
    this.fieldsOfConf = config.flatMap((conf) => conf.fields);

    console.log(this.products);
    console.log(this.fieldsOfConf);
  }
  buildSection() {}
  buildTextField() {}
  buildProductRow() {
    this.fieldsOfConf.forEach((e) => {
      this.products.forEach((product) => {
        let chkcBox = document.createElement('input');
        let checkRow = document.createElement('div');
        let priceBox = document.createElement('div');
        let checkTitle = document.createElement('div');
        let checkTitleBoxContainer = document.createElement('div');

        if (e.id === product.id) {
          chkcBox.type = 'checkbox';
          chkcBox.id = product.id;
          chkcBox.title = product.title;
          checkTitle.innerText = product.title;
          priceBox.innerText = product.price + '€';
          checkTitleBoxContainer.appendChild(chkcBox);
          checkTitleBoxContainer.appendChild(checkTitle);
          checkRow.appendChild(checkTitleBoxContainer);
          checkRow.appendChild(priceBox);
          console.log(checkRow);

          return checkRow;
        } else {
          return false;
        }
      });
    });
  }
}
