import LazyLoad from "react-lazyload";
import { useState, useEffect } from "react";
import PosterLink from "components/PosterLink";
import Scenery from "components/Scenery";
import DetailsPanelWrapper from "components/DetailsPanelWrapper";
import PosterTitle from "components/PosterTitle";
import RatingInfo from "./RatingInfo";
import LINKS from "utils/constants/links";
import CLASS_NAMES from "utils/constants/class-names";
import { W342H513 } from "config/image-sizes";
import QUERY_PARAMS from "utils/constants/query-params";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons/faHeart";

const POSTER_LINK_CLASS_NAME = "poster-link";
const POSTER_TITLE_CLASS_NAME = "poster-title-color";
const RATING_INFO_CLASS_NAME = "rating-info-color";

library.add(faHeartSolid);
library.add(faHeartRegular);

const MovieListItem = ({
  theme,
  movie,
  baseUrl,
  fetchpriority,
  onSetFavorite,
  favorites,
}) => {
  // const [favoriteSelected, setFavoriteSelected] = useState(false);
  // const [favorites, setFavorites] = useState([]);

  // useEffect(() => {
  //   console.log(`favorites ${JSON.stringify(favorites)}`);
  //   saveValue(favorites);
  // }, [favorites]);

  // const handleFavoriteSelected = (movieId) => {
  //   console.log(`handleFavoriteSelected ${movieId}`);
  //   setFavorites([...favorites, movie.id]);
  //   console.log(favorites);
  // e.preventDefault();
  /*
    setFavorites((favorites) => [...favorites, movieId]);
    console.log(favorites);*/
  /*console.log(
      `handleFavoriteSelected ${movieId} ${JSON.stringify(
        Object.assign(
          [],
          ...favorites,
          favorites.filter((item) => item == movieId).length <= 0 && movieId
        )
      )}`
    );

    setFavoriteSelected(!favoriteSelected);
    setFavorites(
      Object.assign(
        [],
        ...favorites,
        favorites.filter((item) => item == movieId).length <= 0 && movieId
      )
    );
    console.log(`favorites ${JSON.stringify(favorites)}`);
    //   // saveValue(JSON.stringify([movieId]));
    // }
    e.preventDefault();
    // try {
    //   await localforage.getItem("userFavorites", function (err, value) {
    //     const favs = JSON.parse(value);
    //     const favorites = favs ? [...favs, movieId] : [movieId];
    //     saveValue(JSON.stringify(favorites));
    //     setFavorites(favorites);
    //   });
    // } catch (e) {
    //   console.log(e);
    // }*/
  // };
  // const checkIfFavorite = (movieId) => {
  //   return favorites.filter((value) => value == movieId)?.length > 0;
  // };
  return (
    <>
      <LazyLoad height={200} offset={1400}>
        <div>
          <PosterLink
            className={POSTER_LINK_CLASS_NAME}
            href={{
              pathname: LINKS.MOVIE.HREF,
              query: {
                [QUERY_PARAMS.ID]: movie.id,
                [QUERY_PARAMS.PAGE]: 1,
              },
            }}
          >
            <Scenery
              width={W342H513.WIDTH}
              height={W342H513.HEIGHT}
              fetchpriority={fetchpriority}
              src={`${baseUrl}w${W342H513.WIDTH}${movie.poster_path}`}
            />
            <DetailsPanelWrapper theme={theme}>
              <PosterTitle theme={theme} className={POSTER_TITLE_CLASS_NAME}>
                {movie.title}
              </PosterTitle>
              <RatingInfo
                className={RATING_INFO_CLASS_NAME}
                voteAverage={movie.vote_average}
                tooltip={`${movie.vote_average} average rating ${movie.vote_count}`}
              />
            </DetailsPanelWrapper>
          </PosterLink>
          <button
            style={{ background: "none", border: "none" }}
            onClick={() => onSetFavorite(movie.id)}
          >
            {favorites?.toString().includes(movie.id) ? ( // favoriteSelected ||
              <FontAwesomeIcon
                icon={faHeartSolid}
                size="2x"
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeartRegular}
                size="2x"
                style={{ width: 20, height: 20 }}
              />
            )}
          </button>
        </div>
      </LazyLoad>
      <style jsx>{`
        :global(
            .${POSTER_LINK_CLASS_NAME}:hover
              .${CLASS_NAMES.IMAGE_LOADING_PLACEHOLDER}
          ) {
          box-shadow: ${theme.shadows[0]};
          border-radius: 0;
        }

        :global(.${POSTER_LINK_CLASS_NAME}:hover .${POSTER_TITLE_CLASS_NAME}) {
          color: var(--palette-text-primary);
        }

        :global(
            .${POSTER_LINK_CLASS_NAME}:hover
              .${RATING_INFO_CLASS_NAME}
              .${CLASS_NAMES.RATING}
          ) {
          color: var(--palette-warning-light);
        }
      `}</style>
    </>
  );
};

export default MovieListItem;
