class MainApi {
    constructor({ url }) {
      this._url = url;
    }
  
    getResponseData(res) {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка:${res.status}`);
        }
      }
  
      getMovies() {
      return fetch(`${this._url}/movies`, {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
      }).then((res) => {
        return this.getResponseData(res);
      });
    }
  
    addMovie(movie) {
      return fetch(`${this._url}/movies`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `https://api.nomoreparties.co${movie.image.url}`,
          trailerLink: movie.trailerLink,
          thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
          movieId: movie.id.toString(),
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
        }),
      }).then((res) => {
        return this.getResponseData(res);
      });
    }
  
    deleteMovie(id) {
      return fetch(`${this._url}/movies/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
      }).then((res) => {
        return this.getResponseData(res);
      });
    }
  }
  
  const mainApi = new MainApi({
    url: 'https://api.explorer.movies.nomoredomains.sbs',
    //url: 'http://localhost:3000',
  });
  
  export default mainApi;