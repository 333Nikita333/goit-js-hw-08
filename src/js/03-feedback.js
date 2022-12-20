'use strict';
const throttle = require('lodash.throttle');
const refs = {
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('.feedback-form input'),
  textareaEl: document.querySelector('.feedback-form textarea'),
};
const LOCALSTORAGE_KEY = 'feedback-form-state';

refs.formEl.addEventListener('input', throttle(onInputOrTextareaData, 500));
refs.formEl.addEventListener('submit', onSubmitForm);

const userForm = {
  email: '',
  message: '',
};

recordingData();
checkOfEnteredData();

function onInputOrTextareaData(evt) {
  userForm[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userForm));
}
function checkOfEnteredData() {
  if (refs.textareaEl.value) {
    userForm.message = refs.textareaEl.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userForm));
  }
  if (refs.inputEl.value) {
    userForm.email = refs.inputEl.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userForm));
  }
}
function recordingData() {
  const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (savedData) {
    refs.inputEl.value = savedData.email;
    refs.textareaEl.value = savedData.message;
    return savedData;
  }
}
function onSubmitForm(evt) {
  evt.preventDefault();
  if (!evt.target.email.value || !evt.target.message.value) {
    return;
  }
  console.log(userForm);
  evt.target.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
