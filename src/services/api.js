// Fichero src/services/api.js
const callToApi = async () => {
  const URL_API = `https://owen-wilson-wow-api.herokuapp.com`;

  // Llamamos a la API
  const response = await fetch(`${URL_API}/wows/random?results=50`);
  const data = await response.json();

  // Cuando responde la API podemos limpiar los datos aquí
  const result = data.map((item) => {
    return {
      movie: item.movie,
      year: item.year,
      audio: item.audio,
      image: item.poster,
      phrase: item.full_line,
      director: item.director,
      id: `${item.movie.replace(' ', '-')}--${item.timestamp}`,
    };
  });

  return result;
};
export { callToApi };
