import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../../getMovies";
import style from "./MovieCast.module.css";
import { Circles } from "react-loader-spinner";

export default function MoviesCast() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      setLoading(true);
      try {
        const response = await getMovieCast(movieId);
        setCast(response.data.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <div>
      <h2 className={style.title}>Movie Cast</h2>

      {loading && (
        <div className={style.loader}>
          <Circles
            height="80"
            width="80"
            color="orangered"
            ariaLabel="circles-loading"
            visible={true}
          />
        </div>
      )}

      {!loading && cast.length > 0 && (
        <ul className={style.list}>
          {cast.map((actor) => (
            <li key={actor.cast_id} className={style.listItem}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className={style.actorImage}
              />
              <div>
                <p>
                  <strong>{actor.name}</strong>
                </p>
                <p className={style.description}>
                  Character: {actor.character}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {!loading && cast.length === 0 && (
        <p className={style.descriptionMsg}>No cast information available.</p>
      )}
    </div>
  );
}
