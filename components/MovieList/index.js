import MoviesGridContainer from "./MoviesGridContainer";
import MovieListItem from "./MovieListItem";
import Pagination from "components/Pagination";
import withTheme from "utils/hocs/withTheme";
import { useState, useEffect } from "react";
import * as localforage from "localforage";
import Switch from "react-switch";

const MovieList = ({ theme, movies, baseUrl }) => {
  const [favorites, setFavorites] = useState([]);
  const [filterByFavs, setFilterByFavs] = useState(false);

  const readValues = async () => {
    await localforage.getItem("userFavorites", function (err, value) {
      setFavorites(JSON.parse(value));
    });
  };

  const saveValue = async (values = []) => {
    await localforage.setItem("userFavorites", JSON.stringify(values));
  };

  useEffect(() => readValues(), []);

  useEffect(() => {
    saveValue(favorites);
    console.log(favorites);
  }, [favorites]);
  return (
    <>
      <div>
        Filter by favorites{" "}
        <Switch
          onChange={() => setFilterByFavs(!filterByFavs)}
          checked={filterByFavs}
        />
      </div>
      <MoviesGridContainer theme={theme}>
        {movies.results.map((movie, index) => (
          <>
            {(!filterByFavs ||
              (filterByFavs && favorites?.toString().includes(movie.id))) && (
              <MovieListItem
                theme={theme}
                key={movie.id}
                movie={movie}
                fetchpriority={index === 0 ? "high" : "low"}
                baseUrl={baseUrl}
                onSetFavorite={(id) =>
                  favorites.filter((item) => item.id == id).length <= 0
                    ? setFavorites([...favorites, id])
                    : setFavorites(favorites.filter((item) => item.id !== id))
                }
                favorites={favorites}
              />
            )}
          </>
        ))}
      </MoviesGridContainer>
      <Pagination page={movies.page} totalPages={movies.total_pages} />
    </>
  );
};

export default withTheme(MovieList);
