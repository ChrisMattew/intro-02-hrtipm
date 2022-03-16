import { config, products, validationRules } from './config';
import Section from './Section';
import { fieldsMap } from './fields';
import './style.css';

const formNode = document.getElementById('dynamic-form');
const registerButton = document.getElementById('register-button');
const objValidationRules = Object.fromEntries(validationRules);
console.log(validationRules);

config.forEach((elm) => {
  let section = document.createElement('div');
  let title = document.createElement('h1');
  let description = document.createElement('p');

  let descriptionBox = document.createElement('div');
  let formInputs = document.createElement('div');
  let productBox = document.createElement('div');

  section.classList.add('section');

  elm.fields.forEach((field) => {
    let inputTxt = document.createElement('label');
    let input = document.createElement('input');
    let chkcBox = document.createElement('input');
    let checkRow = document.createElement('div');
    let inputRow = document.createElement('div');

    checkRow.classList.add('product-row');

    if (field.type === 'text') {
      if (field.id === 'name') {
        input.setAttribute('required', objValidationRules.name.required);
        input.setAttribute('minlength', objValidationRules.name.min);
      } else if (field.id === 'surname') {
        input.setAttribute('required', objValidationRules.surname.required);
      } else if (field.id === 'email') {
        input.setAttribute('required', objValidationRules.surname.required);
        input.setAttribute('includes', objValidationRules.email.includes);
        input.setAttribute('minlength', objValidationRules.email.min);
      }
      input.id = field.id;
      input.type = field.type;
      inputTxt.innerText = field.label;

      inputRow.appendChild(inputTxt);
      inputRow.appendChild(input);
    } else if (field.type !== 'text') {
      let priceBox = document.createElement('div');
      let checkTitle = document.createElement('div');
      let checkTitleBoxContainer = document.createElement('div');

      priceBox.classList.add('price-box');
      checkTitleBoxContainer.classList.add('checkbox-box');
      products.forEach((product) => {
        if (field.id === product.id) {
          chkcBox.type = 'checkbox';
          chkcBox.id = product.id;
          chkcBox.title = product.title;
          checkTitle.innerText = product.title;
          priceBox.innerText = product.price + '€';
        }
        checkTitleBoxContainer.appendChild(chkcBox);
        checkTitleBoxContainer.appendChild(checkTitle);
        checkRow.appendChild(checkTitleBoxContainer);
        checkRow.appendChild(priceBox);
      });
      productBox.appendChild(checkRow);
    }
    formInputs.appendChild(inputRow);
  });

  title.innerHTML = elm.title;
  description.innerHTML = elm.description;
  descriptionBox.classList.add('description');
  descriptionBox.appendChild(title);
  descriptionBox.appendChild(description);

  section.appendChild(descriptionBox);
  section.appendChild(formInputs);
  section.appendChild(productBox);

  document.querySelector('#form-wrapper').appendChild(section);
});

let message = {};
registerButton.addEventListener('click', (e) => {
  e.preventDefault();

  alert(message);
});
