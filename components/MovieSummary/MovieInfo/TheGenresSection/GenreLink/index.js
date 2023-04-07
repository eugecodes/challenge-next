import Link from "next/link";

import withTheme from "utils/hocs/withTheme";
import LINKS from "utils/constants/links";
import QUERY_PARAMS from "utils/constants/query-params";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faDotCircle);
const GenreLink = ({ theme, genre }) => (
  <>
    <Link
      href={{
        pathname: LINKS.GENRE.HREF,
        query: {
          [QUERY_PARAMS.ID]: genre.id,
          [QUERY_PARAMS.NAME]: genre.name,
          [QUERY_PARAMS.PAGE]: 1,
        },
      }}
    >
      <a>
        <FontAwesomeIcon
          icon={faDotCircle}
          size="sm"
          style={{ width: 20, height: 20, marginRight: 4 }}
        />
        {genre.name}
      </a>
    </Link>
    <style jsx>{`
      a {
        display: flex;
        align-items: center;
        padding: 0.5rem 0rem;
        color: var(--palette-secondary-main);
        line-height: 1;
        font-size: 1.25rem;
        font-weight: ${theme.typography.fontWeightBold};
        text-transform: uppercase;
      }

      a:not(:last-child) {
        margin-right: 2rem;
      }

      a:hover {
        text-decoration: underline;
      }

      a:active {
        transform: translateY(2px);
      }
    `}</style>
  </>
);

export default withTheme(GenreLink);
