'use strict';

function getDogImage() {
  fetch('https://dog.ceo/api/breed/sheepdog/shetland/images/random')
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Oh no! there are some issues. Please try later again :('));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results').html(`<h2>Look at this dog!</h2>`);

  let imageUrls = `<img src="${responseJson.message}" alt="Generated dog image" class="loadedImages">`;
  $('.images').replaceWith(`<div class="images">${imageUrls}</div>`);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});