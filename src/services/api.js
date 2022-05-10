// Fichero src/services/api.js
const callToApi = async (number) => {
  const URL_API = `https://owen-wilson-wow-api.herokuapp.com`;

  // Llamamos a la API
  const response = await fetch(`${URL_API}/wows/random?results=${number}`);
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
      video: item.video,
      id: `${item.movie.replace(' ', '-')}--${item.timestamp}`,
    };
  });
  console.log(result);
  return result;
};
export { callToApi };
