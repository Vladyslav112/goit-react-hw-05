import { Link, useLocation } from "react-router-dom";
import style from "./MovieList.module.css";

export default function MovieList({ trendingMovies }) {
  const location = useLocation();
  return (
    <div>
      <h2 className={style.title}>Trending day</h2>
      <ul className={style.list}>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={location.state}
              className={style.link}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
