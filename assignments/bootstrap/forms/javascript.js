document.addEventListener('DOMContentLoaded', function() {
  const addMovieModal = document.getElementById('add-movie-modal');
  const movieTitleInput = document.getElementById('movie-title');
  const form = document.getElementById('movie-form');

  addMovieModal.addEventListener('hidden.bs.modal', () => {
    form.reset();
  });

  addMovieModal.addEventListener('shown.bs.modal', () => {
    movieTitleInput.focus();
  });

  document.getElementById('movie-title').addEventListener('input', function () {
    this.classList.remove('is-invalid');
  });

  document.getElementById('movie-genre').addEventListener('change', function () {
    this.classList.remove('is-invalid');
  });

  const movieScore = document.getElementById('movie-score');
  movieScore.onchange = () => {
    const movieScoreHelper = document.getElementById('movie-score-helper');
    movieScoreHelper.innerHTML = getScoreHelperText(movieScore.value);
  }

  form.onsubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if(formIsValid()) {
      const movieTr = document.createElement('tr');
      const movieHtml =
        `<td>${document.getElementById('movie-title').value}</td>` +
        `<td>${document.getElementById('movie-genre').value}</td>` +
        `<td>${formatScore(document.getElementById('movie-score').value)}</td>`;

      movieTr.innerHTML = movieHtml;
      document.getElementById('movies-body').prepend(movieTr);

      const movieModal = document.getElementById('add-movie-modal');
      bootstrap.Modal.getInstance(movieModal).hide();
    }
  }
});

const formIsValid = () => {
  let isValid = true;

  const movieTitleInput = document.getElementById('movie-title');
  const movieTitle = movieTitleInput.value;
  const movieTitleFeedback = document.getElementById('movie-title-feedback');

  if (movieTitle === '') {
    isValid = false;
    movieTitleInput.classList.add('is-invalid');
    movieTitleFeedback.innerHTML = 'is required';
  }
  else if (movieTitle.length > 30) {
    isValid = false;
    movieTitleInput.classList.add('is-invalid');
    movieTitleFeedback.innerHTML = 'cannot be longer than 30 characters';
  }
  else {
    movieTitleInput.classList.remove('is-invalid');
  }

  const movieGenreInput = document.getElementById('movie-genre');
  const movieGenre = movieGenreInput.value;

  if (movieGenre === '') {
    isValid = false;
    movieGenreInput.classList.add('is-invalid');
  }

  return isValid;
}

const getScoreHelperText = (scoreValue) => {
  let helperText;

  switch(scoreValue) {
    case '1':
      helperText = 'Horrible';
      break;
    case '2':
      helperText = 'Bad';
      break;
    case '3':
      helperText = 'Okay';
      break;
    case '4':
      helperText = 'Good';
      break;
    case '5':
      helperText = 'Excellent';
      break;
  }

  return helperText;
}

const formatScore = (scoreValue) => {
  let helperText;

  switch(scoreValue) {
    case '1':
      helperText = '1/5 - Horrible';
      break;
    case '2':
      helperText = '2/5 - Bad';
      break;
    case '3':
      helperText = '3/5 - Okay';
      break;
    case '4':
      helperText = '4/5 - Good';
      break;
    case '5':
      helperText = '5/5 - Excellent';
      break;
  }

  return helperText;
}