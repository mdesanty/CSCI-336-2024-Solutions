document.addEventListener('DOMContentLoaded', function() {
  getDoggo();
});

const getDoggo = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      const doggoDiv = document.getElementById('doggo');
      doggoDiv.innerHTML = `<img src="${data.message}" />`;
    });
}
