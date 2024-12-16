import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGM5MmM2NTQxNDUyZDQ3Mzk3MTgzYTc0ZWYxMTgxYiIsIm5iZiI6MTczNDI5ODM5OC43MTksInN1YiI6IjY3NWY0YjFlYWFkZTMyNTliOTI5NTA5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v9oQ-1BRTMfDwheV67ydpkTnwjPAw7Gla3e-cERZOjw",
  },
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return data;
};

export const getMoviesDetails = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}?language=en-US`, options);
  return data;
};

export const getMoviesDetailsCast = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?language=en-US`,
    options
  );
  return data;
};

export const getMoviesByQuery = async (query) => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return data;
};
