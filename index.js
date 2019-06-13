'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
      .catch(error => alert('Oh no! there are some issues. Please try again later. :('));
    }

function displayResults(responseJson) {
  console.log(responseJson);

  if (responseJson.message == "Breed not found") {
    alert('That breed was not found, please try again with exact breed name.');
  } else {
    $('.results').html(`<h2>adorable dog pic!</h2>`);

    $('.results').append(
      `<img src="${responseJson.message}" class="results-img" width="400" height="300" margin-top: "30">`);
    $('.results').removeClass('hidden');
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let breedOfDog = $('input[name="breedOfDog"]').val();
    getDogImage(breedOfDog);
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
