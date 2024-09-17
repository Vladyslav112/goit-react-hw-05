import axios from "axios";

export async function getTrendingMovie() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day",
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTdkYWExNzQxMzNiNWZmNmJlZWRlYTYzN2Q1NGExOCIsIm5iZiI6MTcyNjU4NzYyMC44NzA0NTksInN1YiI6IjY2ZTk5ZDFjNWMwNTE5YTIzNGQyZWJjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OzEcbf41WJSsG6DionhG2Si8MzhDhliftfV3Fmde2Lw",
      },
    }
  );
  return response.data;
}

export function searchMovie(query) {
  return axios.get("https://api.themoviedb.org/3/search/movie", {
    params: { language: "en-US", query },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTdkYWExNzQxMzNiNWZmNmJlZWRlYTYzN2Q1NGExOCIsIm5iZiI6MTcyNjU4NzYyMC44NzA0NTksInN1YiI6IjY2ZTk5ZDFjNWMwNTE5YTIzNGQyZWJjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OzEcbf41WJSsG6DionhG2Si8MzhDhliftfV3Fmde2Lw",
    },
  });
}

export async function getMovieDetail(movieId) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTdkYWExNzQxMzNiNWZmNmJlZWRlYTYzN2Q1NGExOCIsIm5iZiI6MTcyNjU4NzYyMC44NzA0NTksInN1YiI6IjY2ZTk5ZDFjNWMwNTE5YTIzNGQyZWJjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OzEcbf41WJSsG6DionhG2Si8MzhDhliftfV3Fmde2Lw",
      },
    }
  );
  return response.data;
}

export async function getMovieCast(movieId) {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTdkYWExNzQxMzNiNWZmNmJlZWRlYTYzN2Q1NGExOCIsIm5iZiI6MTcyNjU4NzYyMC44NzA0NTksInN1YiI6IjY2ZTk5ZDFjNWMwNTE5YTIzNGQyZWJjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OzEcbf41WJSsG6DionhG2Si8MzhDhliftfV3Fmde2Lw",
      },
    }
  );
}

export async function getReviews(movieId) {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTdkYWExNzQxMzNiNWZmNmJlZWRlYTYzN2Q1NGExOCIsIm5iZiI6MTcyNjU4NzYyMC44NzA0NTksInN1YiI6IjY2ZTk5ZDFjNWMwNTE5YTIzNGQyZWJjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OzEcbf41WJSsG6DionhG2Si8MzhDhliftfV3Fmde2Lw",
      },
    }
  );
}
