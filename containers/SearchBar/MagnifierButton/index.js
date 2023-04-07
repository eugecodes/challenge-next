import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

const MagnifierButton = ({ opened, theme }) => (
  <>
    <button className="magnifier-button" aria-label="Search for a movie">
      <FontAwesomeIcon icon={faSearch} size="2x" />
    </button>
    <style jsx>{`
      .magnifier-button {
        line-height: 0;
        pointer-events: ${opened ? "auto" : "none"};
        cursor: ${opened ? "pointer" : "none"};
        background-color: transparent;
        border: none;
        outline: none;
        color: var(--palette-secondary-contrast-text);
      }

      @media ${theme.mediaQueries.large} {
        .magnifier-button {
          font-size: 1rem;
        }
      }
    `}</style>
  </>
);

export default MagnifierButton;
