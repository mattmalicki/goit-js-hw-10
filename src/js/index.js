import { fetchCatByBreed, fetchBreeds } from './cat-api';

const selectEl = document.querySelector('.breed-select');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const catsEl = document.querySelector('.cat-info');

fetchBreeds()
  .then(function (response) {
    for (const cat of response) {
      selectEl.insertAdjacentHTML(
        'beforeend',
        `<option value="${cat.id}">${cat.name}</option>`
      );
    }
  })
  .catch(function (error) {
    console.log(error);
  });

selectEl.addEventListener('change', function () {
  fetchCatByBreed().then(function (response) {
    showCat(response);
  });
});

function showCat(cat) {
  console.log(cat);
  const imgEl = `<img src="${cat.url}" width="300px" />`;
  const infoEl = `<div><h2>${cat.name}</h2><p>${cat.description}</p><p>${cat.temperament}</p></div>`;
  catsEl.insertAdjacentHTML('beforeend', imgEl);
  catsEl.insertAdjacentHTML('beforeend', infoEl);
}
