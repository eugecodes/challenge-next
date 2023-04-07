import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faCalendar,
  faPoll,
  faFaceGrinBeam,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHeart);
library.add(faCalendar);
library.add(faPoll);
library.add(faFaceGrinBeam);

import STATIC_MOVIE_CATEGORIES from "utils/constants/static-movie-categories";

const renderIcon = (title) => {
  switch (title) {
    case STATIC_MOVIE_CATEGORIES[0].name:
      return (
        <FontAwesomeIcon
          icon={faHeart}
          size="sm"
          style={{ width: 20, height: 20, marginRight: "10px" }}
        />
      );
    case STATIC_MOVIE_CATEGORIES[1].name:
      return (
        <FontAwesomeIcon
          icon={faPoll}
          size="sm"
          style={{ width: 20, height: 20, marginRight: "10px" }}
        />
      );
    case STATIC_MOVIE_CATEGORIES[2].name:
      return (
        <FontAwesomeIcon
          icon={faCalendar}
          size="sm"
          style={{ width: 20, height: 20, marginRight: "10px" }}
        />
      );
    default:
      return (
        <FontAwesomeIcon
          icon={faFaceGrinBeam}
          size="sm"
          style={{ width: 20, height: 20, marginRight: "10px" }}
        />
      );
  }
};

const MenuItem = ({ title }) => (
  <>
    <div className="menu-item">
      {renderIcon(title)}
      {title}
    </div>
    <style jsx>{`
      .menu-item {
        display: flex;
        align-items: center;
        padding: 1rem 2rem;
      }
    `}</style>
  </>
);

export default MenuItem;
